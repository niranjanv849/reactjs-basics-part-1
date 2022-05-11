import React from "react";
import "./TaskFour.css";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

function TaskFour() {
  return (
    <div className="tf">
      <p className="tf__title">Material Ui Playground</p>
      <div className="youtube__card">
        <div className="thumbnail">
          <img
            className="thumbnail__img"
            src="https://i.ytimg.com/vi/PhxfspwMdww/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCQwO0FIIvvZzPy1nyNYHoGg-uibg"
            alt="thumbnail loading.."
          />
        </div>
        <div className="card__titleWithImage">
          <img
            src="https://yt3.ggpht.com/ytc/AKedOLQbADeaRG5dk_jYMNl8xO5jy6wT96sGKNe0lB99zw=s68-c-k-c0x00ffffff-no-rj"
            alt="channel logo"
          />
          <div>
            JollyO Gymkhana - Video Song| Beast | Thalapathy Vijay | Pooja Hegde
            | Sun...
          </div>
        </div>
        <div className="card__footer">
          <span>Red gaint productions</span>
          <span>13M views - 8 days ago</span>
        </div>
      </div>
      <Stack spacing={1}>
        <div className="youtube__card1">
          <div className="thumbnail">
            {/* <img
              className="thumbnail__img"
              src="https://i.ytimg.com/vi/PhxfspwMdww/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCQwO0FIIvvZzPy1nyNYHoGg-uibg"
              alt="thumbnail loading.."
            /> */}
            <Skeleton
              sx={{ bgcolor: "grey.500" }}
              animation="wave"
              variant="rectangular"
              width={300}
              height={200}
            />
          </div>
          <div className="card__titleWithImage">
            {/* <img
              src="https://yt3.ggpht.com/ytc/AKedOLQbADeaRG5dk_jYMNl8xO5jy6wT96sGKNe0lB99zw=s68-c-k-c0x00ffffff-no-rj"
              alt="channel logo"
            /> */}
            <Skeleton
              className="ske"
              sx={{ bgcolor: "grey.500" }}
              animation="wave"
              variant="circular"
              width={35}
              height={35}
            />
            <div>
              {/* JollyO Gymkhana - Video Song| Beast | Thalapathy Vijay | Pooja
              Hegde | Sun... */}
              <Skeleton
                sx={{ bgcolor: "grey.500" }}
                animation="wave"
                variant="text"
                width={200}
                height={50}
              />
            </div>
          </div>
          <div className="card__footer">
            <Skeleton
              sx={{ bgcolor: "grey.500" }}
              animation="wave"
              variant="text"
              width={150}
              height={35}
            />
            {/* <span>Red gaint productions</span>
            <span>13M views - 8 days ago</span> */}
          </div>
        </div>
      </Stack>
    </div>
  );
}

export default TaskFour;
