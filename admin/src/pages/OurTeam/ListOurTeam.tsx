import { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import { OurTeamModel } from "../../models/responses/ourTeams/GetOurTeams";
import OurTeamService from "../../services/OurTeamService";
import { Table } from "react-bootstrap";
import './styles/ourTeam.css'

type Props = {};

const ListOurTeam = (props: Props) => {

  const [ourTeams, setOurTeams] = useState<OurTeamModel[]>([]);

  const getOurTeams = async () => {
    try {
      const response = await OurTeamService.getAll();
      setOurTeams(response.data.data);
    } catch (error) {
      console.error("Error fetching ourTeams:", error);
    }
  };

  const handleDelete = async (id: number) => {
    var isConfirmed = window.confirm('Are you sure you want to delete?');
    if (isConfirmed) {
      await OurTeamService.deleteOurTeam(id)
        .then(() => {
          window.location.reload();
        })
        .catch((err: any) => console.error(err))
    }
  };

  useEffect(() => {
    getOurTeams();
  }, []);
    return (
      <div className="ourTeams">
        <div className="headingContainer">
          <div className="titleContainer">
            <h2>OurTeams</h2>
          </div>
          <div className="addBtnContainer">
            <Link title="Add New OurTeam" to="/add-our-teams" className="btn btn-sm">
              <IoMdAdd /> Add OurTeam
            </Link>
          </div>
        </div>
        <div className="secContainer">
          <div className="ourTeamContainer">
            <div className="ourTeamTableCard shadow-rounded-box">
              <Table className="table table-rounded table-hover table-borderless">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Photo</th>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Position</th>
                    <th>Github</th>
                    <th>Linkedin</th>
                    <th>Description</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {ourTeams.map((ourTeam) =>
                    <tr key={ourTeam.id}>
                      <td>{ourTeam.id}</td>
                      <td><img src={ourTeam.imageUrl} alt="ourTeam" width="50" height="50" /></td>
                      <td>{ourTeam.name}</td>
                      <td>{ourTeam.surname}</td>
                      <td>{ourTeam.position}</td>
                      <td>{ourTeam.github}</td>
                      <td>{ourTeam.linkedin}</td>
                      <td>{ourTeam.description}</td>
                      <td>
                        <button onClick={() => handleDelete(ourTeam.id)} title="Delete OurTeam" className="btn btn-sm">
                          <IoMdAdd /> Delete
                        </button>
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    );
    
};

export default ListOurTeam;