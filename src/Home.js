import React, {Fragment} from "react";
import Search from "./Search";
import SiteResults from "./SiteReults";

const Home = () => {
    return (
        <Fragment>
            <Search />
            <SiteResults />
        </Fragment>
    )
};

export default Home;
