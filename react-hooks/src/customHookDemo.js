import { useInputCustomHook } from "./useInputCustomHook";

export const CustomHookDemo = () => {
    const [textProps, resetValue] = useInputCustomHook("kk");
    const submit = (e) => {
        e.preventDefault();
        alert(textProps.value);
        resetValue();
    }
    return (
        <>
            <form onSubmit={submit}>
                <input {...textProps} type="text" />
                <button>Submit</button>
            </form>
        </>
    );
} 