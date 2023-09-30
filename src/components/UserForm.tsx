import FormWrapper from "./FormWrapper";

type UserData = {
    firstName: string,
    lastName: string,
    age: string,
}

type UserFormProps = UserData & {
    updateFields: (fields: Partial<UserData>) => void
}

export default function UserForm({firstName,  lastName, age, updateFields}: UserFormProps) {
    return <FormWrapper title="User Form">
        <label>First Name</label>
        <input type="text" required autoFocus value={firstName} onChange={e => updateFields({firstName: e.target.value})}/>
        <label>Last Name</label>
        <input type="text" required value={lastName} onChange={e => updateFields({lastName: e.target.value})}/>
        <label>Age</label>
        <input type="number" required min={18} value={age} onChange={e => updateFields({age: e.target.value})}/>
    </FormWrapper>
}