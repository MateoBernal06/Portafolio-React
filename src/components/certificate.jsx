import { CardCertificate } from "../layout/card_certificate.jsx"

export const Certificate = () => {
    return(
        <div className="certificate">
            <h1 className="title-projects" >Certificados Obtenidos</h1>
            <div className="place-certificate">
                <CardCertificate></CardCertificate>
                <CardCertificate></CardCertificate>
                <CardCertificate></CardCertificate>
            </div>
        </div>
    )
}
