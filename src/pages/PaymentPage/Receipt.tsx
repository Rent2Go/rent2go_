import React from "react";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";

// Font'u Google Fonts'tan yükleyin
Font.register({
  family: "Roboto",
  src: "/assets/fonts/Roboto-Regular.ttf",
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
    width: 64,
  },
  image2: {
    marginVertical: 15,
    marginHorizontal: 100,
    width: 32,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Roboto",
    marginBottom: 20,
  },
  author: {
    fontSize: 14,
    textAlign: "left",
    marginBottom: 15,
    fontFamily: "Roboto",
  },
  author2: {
    fontSize: 14,
    textAlign: "left",
    marginBottom: 20,
    fontFamily: "Roboto",
  },
  authors: {
    fontSize: 14,
    textAlign: "right",
    fontFamily: "Roboto",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
    fontFamily: "Roboto",
  },
});

interface ReceiptProps {
  auth: any;
  currentDate: string;
}

const Receipt: React.FC<ReceiptProps> = ({ auth, currentDate }) => (
  <Document>
    <Page style={styles.body}>
      <View>
        <Text style={styles.title}>
          {" "}
          <Image style={styles.image} src="/assets/logo.png" /> RECEIPT{" "}
        </Text>

        <Text style={styles.author}>
          Name: {auth.authInformation.user.firstname}{" "}
          {auth.authInformation.user.lastname}
        </Text>
        <Text style={styles.author}>Date: {currentDate}</Text>
        <Text style={styles.author}>Payment Method: CASH</Text>
        <Text style={styles.author}>Amount: 1.500,00 ₺</Text>
        <Text style={styles.author}>Discount: 150,00 ₺</Text>
        <Text style={styles.author}>Total: 1.350,00 ₺</Text>
        <Text style={styles.author2}>
          Your payment information is as above. Please have this receipt with
          you when you come to pick up the vehicle.
        </Text>
        <Text style={styles.authors}>
          {" "}
          <Image style={styles.image2} src="/assets/logo.png" /> Rent2Go Rent a
          Car
        </Text>
      </View>
      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      />
    </Page>
  </Document>
);

const ReceiptPDF: React.FC<ReceiptProps> = ({ auth, currentDate }) => (
  <PDFDownloadLink
    document={<Receipt auth={auth} currentDate={currentDate} />}
    fileName="receipt.pdf"
    className="btn btn-submit"
  >
    {({ blob, url, loading, error }) =>
      loading ? "Creating PDF..." : "Download PDF"
    }
  </PDFDownloadLink>
);

export default ReceiptPDF;
