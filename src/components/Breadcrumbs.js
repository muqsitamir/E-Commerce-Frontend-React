import React from 'react'
import {Breadcrumbs, Link} from "@mui/material";
import Typography from "@mui/material/Typography";
import HomeIcon from '@mui/icons-material/Home';


export default function BasicBreadcrumbs(props) {
    const breadcrumbs = [
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center', ml: props.ml }}
          color="inherit"
          href="/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
        </Link>
      ];

    let href = "";
    for(let i = 0; i < window.location.pathname.split("/").slice(1,-1).length; i++){
        let page_name = window.location.pathname.split("/").slice(1,-1)[i];
        href = href + "/"  + page_name;
        breadcrumbs.push(
        <Link underline="hover" key="1" color="inherit" href={href}>
            {page_name}
        </Link>
        )
    }
    breadcrumbs.push(<Typography color="text.primary">{window.location.pathname.split("/").slice(-1)[0].replace("-", " ")}</Typography>)

  return (
    <div role="presentation" >
      <Breadcrumbs sx={{mt: props.mt}} separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
    </div>
  );
}