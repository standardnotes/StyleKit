export default Button;
declare function Button({ label, onClick, variant }: {
    label: any;
    onClick: any;
    variant: any;
}): JSX.Element;
declare namespace Button {
    namespace propTypes {
        const label: any;
        const onClick: any;
        const variant: any;
    }
    namespace defaultProps {
        const variant_1: string;
        export { variant_1 as variant };
    }
}
