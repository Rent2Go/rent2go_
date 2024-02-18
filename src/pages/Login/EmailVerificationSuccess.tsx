import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const EmailVerificationSuccess: FC = () => {
    const history = useNavigate();

    const handleButtonClick = () => {
        // Kayıt sayfasına yönlendir
        window.location.href = 'https://rentogo.com.tr/sign-up';
    }

    return (
        <div>
            <h1>E-posta Doğrulama Başarılı!</h1>
            <p>E-postanız başarıyla doğrulandı. Kayıt sayfasına gitmek için aşağıdaki butona tıklayın.</p>
            <button onClick={handleButtonClick}>Kayıt Sayfasına Git</button>
        </div>
    );
}

export default EmailVerificationSuccess;