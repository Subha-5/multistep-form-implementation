import { ReactNode } from "react";

interface FormWrapperProps {
    children: ReactNode,
    title: string
}

export default function FormWrapper ({children, title}: FormWrapperProps) {
    return <>
    <h2 style={{textAlign: "center", margin: 0, marginBottom: "2rem"}}>{title}</h2>
    <div style={{display: "grid", gap: "1rem 0.5rem", justifyContent: "center", gridTemplateColumns: "auto minmax(auto, 400px)"}}>{children}</div>
    </>
}