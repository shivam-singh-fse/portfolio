'use client';
import Image from "next/image";

const items = [
    {
        fromDate: "January 2024",
        toDate: "Current",
        cardTitle: "Associate Consultant",
        cardSubtitle: `Infosys private Limited`,
        cardDetailedText: `I worked as onsite SDE contractor for Amazon. During this time, I worked on their internal applications and services for supply chain. These applications handles/manages functions like cost optimization for amazon vendors, warehouse inventory management, Order cancellation/returns, Vendor Delivery preferences.`,
        imageSrc: ['images/Logo-Amazon.png', 'images/infosys-logo.png'],
    },
    {
        fromDate: "March 2021",
        toDate: "January 2024",
        cardTitle: "Senior Systems Engineer",
        cardSubtitle: `Tata Consultancy Services (TCS)`,
        cardDetailedText: `During this time, I worked on designing and crafting solutions for databases and backend services. I also lead multiple projects under PoS to design, implement and maintain.`,
        imageSrc: ['images/Apple-Logo.png', 'images/TCS-Logo.png'],
    },
    {
        fromDate: "January 2020",
        toDate: "March 2021",
        cardTitle: "Systems Engineer",
        cardSubtitle: `Tata Consultancy Services (TCS)`,
        cardDetailedText: `I worked as offsite SDE Contractor for Apple Inc. During this time, I worked on their PoS (Point of Sale) applications and services. I migrated multiple services from monolithic to microservices architecture. I also migrated their client facing web application for PoS from Java Servlets to ReactJS.`,
        imageSrc: ['images/Apple-Logo.png', 'images/TCS-Logo.png'],
    },
    {
        fromDate: "July 2019",
        toDate: "January 2020",
        cardTitle: "Systems Engineer Trainee",
        cardSubtitle:
            "Tata Consultancy Services (TCS)",
        cardDetailedText: `Landed a job after passing out from graduation. Initial 6-months was training period over various technologies like AR/VR, Machine Learning, etc. As a part of training created a machine learning model to generate 3D-models from an image.`,
        imageSrc: ['images/TCS-Logo.png'],

    },
];

interface CardProps {
    fromDate?: string;
    toDate?: string;
    cardTitle: string;
    cardSubtitle: string;
    cardDetailedText: string;
}

function Card(props: CardProps) {
    return (
        <div className="flex flex-col justify-center w-1/2">
            <span>{props.cardTitle} <span className="text-lg">({props.fromDate} - {props.toDate})</span></span>
            <span className="font-[family-name:var(--font-geist-sans)] text-2xl">{props.cardSubtitle}</span>
            <div className="flex flex-col font-[family-name:var(--font-geist-mono)] text-xl mt-8">
                <span>{props.cardDetailedText}</span>
            </div>
        </div>
    );
}


export default function ExperiencePage() {
    return (
        <div
            className="min-h-screen font-[family-name:var(--font-markPro)]">
            <main className="snap-y snap-mandatory h-screen overflow-y-auto">
                {items.map((value, index) => {
                    return (
                        <div key={index} className="header-wrapper flex flex-col items-center justify-center snap-start h-screen">
                            <header
                                className="experience flex w-3/4 flex-row border-amber-300 p-12 border-2 rounded-3xl justify-around text-3xl">
                                {index % 2 == 0 && (
                                    <Card {...value}/>
                                )}
                                {value.imageSrc.length > 1 ? (<div className="flex flex-col items-center">
                                    <Image src={value.imageSrc[0]} alt="Company" width={200} height={200}/>
                                    <Image src="images/plus.png" alt="Company" width={50} height={50}/>
                                    <Image src={value.imageSrc[1]} alt="Company" width={200} height={200}/>
                                </div>) : (<Image src={value.imageSrc[0]} alt="Company" width={300} height={150}/>)}
                                {index % 2 != 0 && (
                                    <Card {...value}/>
                                )}
                            </header>
                        </div>
                    );
                })}
            </main>
        </div>
    )
        ;
}
