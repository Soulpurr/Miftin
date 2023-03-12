import Headeritems from "./Headeritems";
import {HomeIcon,BadgeCheckIcon,LightningBoltIcon,UserIcon,CollectionIcon,SearchIcon} from '@heroicons/react/solid'


function Header() {
  return (
      <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <Headeritems title='HOME' Icon={HomeIcon}/>
        <Headeritems title='Verified' Icon={BadgeCheckIcon}/>
        <Headeritems title='TRENDING' Icon={LightningBoltIcon}/>
        <Headeritems title='ACCOUNT' Icon={UserIcon}/>
        <Headeritems title='COLLECTIONS' Icon={CollectionIcon}/>
        <Headeritems title='SEARCH' Icon={SearchIcon}/>
        </div>
        <h1 className="text-4xl font-extrabold text-center sm:items-end">MIFTIN</h1>
      </header>
    
  );
}

export default Header;
