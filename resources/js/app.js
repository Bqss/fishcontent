import '../css/app.css';
import '../css/swiper-bundle.css';
import "../js/home"
import Alpine from "alpinejs";
import Sidebar from './components/sidebar';
import SubMenu from './components/submenu';
import Dropdown from './components/dropdown';
import Navbar from './components/navbar';

window.Alpine = Alpine;


Alpine.data("Sidebar", Sidebar);
Alpine.data("SubMenu", SubMenu);
Alpine.data("Dropdown", Dropdown);
Alpine.data("Navbar", Navbar);

Alpine.start();





