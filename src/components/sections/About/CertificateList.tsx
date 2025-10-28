import { certificates } from "@/data/certificates";

export default function CertifiacteList() {

    certificates.sort((a, b) => b.date.getTime() - a.date.getTime());

    return (
        certificates.map((certificate, index) => (
            <a href={certificate.href} key={index}>
                <p className="flex flex-col">
                    <span className="font-semibold">{certificate.name}</span>
                    <span className="italic">Issued by {certificate.issuedBy} on {certificate.platform} —{' '}
                        {certificate.date.toLocaleDateString("en-US", { month: "long", year: "numeric" })}</span>
                </p>
            </a>
        ))
    )
}