export default DropdownMenu;
declare function DropdownMenu({ label, items, icon, onSelectItem }: {
    label: any;
    items: any;
    icon: any;
    onSelectItem: any;
}): JSX.Element;
declare namespace DropdownMenu {
    namespace propTypes {
        const label: any;
        const items: any;
        const onSelectItem: any;
        const icon: any;
    }
}
