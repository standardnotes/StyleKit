export default Icon;
declare function Icon({ name, width, height, className }: {
    name: any;
    width: any;
    height: any;
    className: any;
}): JSX.Element;
declare namespace Icon {
    namespace propTypes {
        const name: any;
        const classList: any;
        const width: any;
        const height: any;
    }
    namespace defaultProps {
        const width_1: number;
        export { width_1 as width };
        const height_1: number;
        export { height_1 as height };
    }
}
