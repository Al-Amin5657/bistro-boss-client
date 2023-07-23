
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../Hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
    // const [menu, setMenu] = useState([]);
    // console.log(menu);

    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(poItem => poItem.category === 'popular');
    //             setMenu(popularItems)
    //         });
    // }, [])
    return (
        <section className='mb-12'>
            <SectionTitle
                subHeading={'Popular Items'}
                heading={'From Our Menu'}
            >
            </SectionTitle>
            <div className='grid md:grid-cols-2 gap-6'>
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="text-center">
                <button className="btn btn-outline border-0 inline-block border-b-4 mt-4">
                    View Full Menu
                </button>
            </div>

        </section>
    );
};

export default PopularMenu;