import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import DashboardIcon from "@mui/icons-material/Dashboard";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import BoltIcon from "@mui/icons-material/Bolt";
import FilterListIcon from "@mui/icons-material/FilterList";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Tooltip from "@mui/material/Tooltip";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Button from "@mui/material/Button";

const MENU_STYLES = {
  color: "white",
  bgcolor: "transparent",
  border: "none",
  paddingX: "5px",
  borderRadius: "4px",
  ".MuiSvgIcon-root": {
    color: "white",
  },
  "&:hover": {
    bgcolor: "primary.50",
  },
};

const BoardBar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) => theme.trello.boardBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        paddingX: 2,
        overflowX: "auto",
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
        borderBottom: "1px solid white",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />}
          label="QuocBaoDev MERN STACK BOARD"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />}
          label="Add To Googledrive"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />}
          label="Automation"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />}
          label="Filters"
          clickable
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon />}
          sx={{
            color: "white",
            borderColor: "white",
            "&:hover": { borderColor: "white" },
          }}
        >
          Invite
        </Button>
        <AvatarGroup
          max={5}
          sx={{
            gap: "10px",
            "& .MuiAvatar-root": {
              width: 34,
              height: 34,
              fontSize: "16px",
              border: "none",
              color: "white",
              cursor: "pointer",
              "&:first-of-type": { bgcolor: "#a4b0be" },
            },
          }}
        >
          <Tooltip title="quocbaole">
            <Avatar
              alt="quocbaole"
              src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.6435-9/147367105_3862888187067319_6803888157118605918_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UM2Z8eJJ3OwAX9gPM01&_nc_ht=scontent.fdad2-1.fna&oh=00_AfA0_PR_8vNboRnu6tWcQlVazKgakI0XmYz-AkzzNbvvsg&oe=6633640F"
            />
          </Tooltip>
          <Tooltip title="quocbaole">
            <Avatar
              alt="quocbaole"
              src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.6435-9/147367105_3862888187067319_6803888157118605918_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UM2Z8eJJ3OwAX9gPM01&_nc_ht=scontent.fdad2-1.fna&oh=00_AfA0_PR_8vNboRnu6tWcQlVazKgakI0XmYz-AkzzNbvvsg&oe=6633640F"
            />
          </Tooltip>
          <Tooltip title="quocbaole">
            <Avatar
              alt="quocbaole"
              src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.6435-9/147367105_3862888187067319_6803888157118605918_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UM2Z8eJJ3OwAX9gPM01&_nc_ht=scontent.fdad2-1.fna&oh=00_AfA0_PR_8vNboRnu6tWcQlVazKgakI0XmYz-AkzzNbvvsg&oe=6633640F"
            />
          </Tooltip>
          <Tooltip title="quocbaole">
            <Avatar
              alt="quocbaole"
              src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.6435-9/147367105_3862888187067319_6803888157118605918_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UM2Z8eJJ3OwAX9gPM01&_nc_ht=scontent.fdad2-1.fna&oh=00_AfA0_PR_8vNboRnu6tWcQlVazKgakI0XmYz-AkzzNbvvsg&oe=6633640F"
            />
          </Tooltip>
          <Tooltip title="quocbaole">
            <Avatar
              alt="quocbaole"
              src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.6435-9/147367105_3862888187067319_6803888157118605918_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UM2Z8eJJ3OwAX9gPM01&_nc_ht=scontent.fdad2-1.fna&oh=00_AfA0_PR_8vNboRnu6tWcQlVazKgakI0XmYz-AkzzNbvvsg&oe=6633640F"
            />
          </Tooltip>
          <Tooltip title="quocbaole">
            <Avatar
              alt="quocbaole"
              src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.6435-9/147367105_3862888187067319_6803888157118605918_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UM2Z8eJJ3OwAX9gPM01&_nc_ht=scontent.fdad2-1.fna&oh=00_AfA0_PR_8vNboRnu6tWcQlVazKgakI0XmYz-AkzzNbvvsg&oe=6633640F"
            />
          </Tooltip>
          <Tooltip title="quocbaole">
            <Avatar
              alt="quocbaole"
              src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.6435-9/147367105_3862888187067319_6803888157118605918_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UM2Z8eJJ3OwAX9gPM01&_nc_ht=scontent.fdad2-1.fna&oh=00_AfA0_PR_8vNboRnu6tWcQlVazKgakI0XmYz-AkzzNbvvsg&oe=6633640F"
            />
          </Tooltip>
          <Tooltip title="quocbaole">
            <Avatar
              alt="quocbaole"
              src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.6435-9/147367105_3862888187067319_6803888157118605918_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UM2Z8eJJ3OwAX9gPM01&_nc_ht=scontent.fdad2-1.fna&oh=00_AfA0_PR_8vNboRnu6tWcQlVazKgakI0XmYz-AkzzNbvvsg&oe=6633640F"
            />
          </Tooltip>
          <Tooltip title="quocbaole">
            <Avatar
              alt="quocbaole"
              src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.6435-9/147367105_3862888187067319_6803888157118605918_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UM2Z8eJJ3OwAX9gPM01&_nc_ht=scontent.fdad2-1.fna&oh=00_AfA0_PR_8vNboRnu6tWcQlVazKgakI0XmYz-AkzzNbvvsg&oe=6633640F"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  );
};

export default BoardBar;
