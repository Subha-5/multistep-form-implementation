import FormWrapper from "./FormWrapper";

type AccountData = {
    email: string,
    password: string
}

type AccountFormProps = AccountData & {
    updateFields: (fields: Partial<AccountData>) => void
}

export default function AccountForm({email, password, updateFields}: AccountFormProps) {
    return <FormWrapper title="Account Creation">
        <label>Email</label>
        <input type="email" required autoFocus value={email} onChange={e => updateFields({email: e.target.value})} />
        <label>Password</label>
        <input type="password" required value={password} onChange={e => updateFields({password: e.target.value})} />
    </FormWrapper>
}