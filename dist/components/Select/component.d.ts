export default Select;
declare function Select({ defaultValue, placeholder, options, onChange }: {
    defaultValue: any;
    placeholder: any;
    options: any;
    onChange: any;
}): JSX.Element;
declare namespace Select {
    namespace propTypes {
        const defaultValue: any;
        const options: any;
        const onChange: any;
        const placeholder: any;
    }
    namespace defaultProps {
        const defaultValue_1: string;
        export { defaultValue_1 as defaultValue };
        const placeholder_1: string;
        export { placeholder_1 as placeholder };
    }
}
