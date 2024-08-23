import { UserLogin } from "@/components/login/formikLogin";
import { MyFormValue } from "@/components/register/formikRegister";

export const registerEo = async (data: MyFormValue) => {
    const res = await fetch("http://localhost:8000/api/autheo/create", {
        method: "POST",
        next: { revalidate: 200 },
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(data)
    })
    if (!res.ok) throw new Error("Failed to Register")
    return res.json()
};

export const loginEo = async (data: UserLogin) => {
    const res = await fetch('http://localhost:8000/api/autheo/login', {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(data),
    });
    const response = await res.json();
    return { result: response, ok: res.ok }
};