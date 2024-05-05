import Card from "@mui/material/Card";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/joy/Chip";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { IJob } from "../../types";
import appText from "../../PageText";

/* Job Card - Displays the deatils of the job posting  */

interface CardsProps {
  data: IJob;
  expanded: String[];
  handleExpandClick: (jobId: string) => void;
}

const JobCard: React.FC<CardsProps> = ({
  data,
  expanded,
  handleExpandClick,
}) => {
  return (
    <Card
      sx={{
        borderRadius: "20px",
        padding: "16px",
        margin: "16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "95%",
        minWidth: "280px",
      }}
    >
      <Box>
        <Chip
          variant="outlined"
          sx={{ fontSize: "9px", fontWeight: "400", my: 1 }}
        >
          ⏳{appText.jobCard.timeline}
        </Chip>
        <Box display="flex" gap="0.5rem" sx={{ pt: 1, pb: 2 }}>
          <Avatar>
            <img src={data.logoUrl} style={{ height: "40px" }} />
          </Avatar>
          <Box>
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: "600",
                color: "#8b8b8b",
              }}
            >
              {data.companyName}
            </Typography>
            <Typography sx={{ fontSize: "14px", textTransform: "capitalize" }}>
              {data.jobRole}
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "500",
                marginTop: "4px",
                textTransform: "capitalize",
              }}
            >
              {data.location}
              {data.minExp &&
                data.maxExp &&
                ` | Exp: ${data.minExp}-${data.maxExp} years`}
            </Typography>
          </Box>
        </Box>
        <CardContent sx={{ p: "0px 12px" }}>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              margin: "8px 0px ",
              color: "rgb(77, 89, 106)",
              fontWeight: "400",
              fontSize: "14px",
            }}
          >
            {appText.jobCard.salary}: &nbsp;
            {data.minJdSalary} {data.minJdSalary && "-"} {data.maxJdSalary}{" "}
            {data.salaryCurrencyCode} ✅
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontWeight: 600, color: "#515151", fontSize: "15px" }}
          >
            {appText.jobCard.about}:
          </Typography>
          <Box
            sx={{
              height: expanded.includes(data.jdUid) ? "fit-content" : 190,
              overflow: "hidden",
              position: "relative",
              "&:after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: expanded.includes(data.jdUid)
                  ? "none"
                  : "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.6) 100%)",
                pointerEvents: "none",
              },
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontSize: "14px", fontWeight: 400, lineHeight: 1.5 }}
            >
              {data.jobDetailsFromCompany}
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center", position: "relative", top: "-5px" }}>
            <Button
              sx={{ color: "#4943da", textTransform: "capitalize" }}
              onClick={() => handleExpandClick(data.jdUid)}
            >
              {expanded.includes(data.jdUid) ? "View Less" : "View More"}
            </Button>
          </Box>
          {data.minExp && (
            <Box sx={{ marginTop: "10px" }}>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#8b8b8b",
                  marginBottom: "3px",
                  letterSpacing: "1px",
                }}
              >
                {appText.jobCard.experience}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  fontSize: "14px",
                  color: "#000",
                }}
              >
                {data.minExp} years
              </Typography>
            </Box>
          )}
        </CardContent>
      </Box>
      <CardActions
        sx={{
          gap: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          sx={{
            backgroundColor: "#54efc3 !important",
            width: "100%",
          }}
        >
          <Link
            color="#000"
            underline="none"
            href={data.jdLink}
            variant="body1"
          >
            ⚡ {appText.jobCard.btn1}
          </Link>
        </Button>
        <Button
          sx={{
            backgroundColor: "#4943da !important",
            margin: "0 !important",
            width: "100%",
            color: "#fff",
          }}
        >
          <Typography variant="body1">{appText.jobCard.btn2}</Typography>
        </Button>
      </CardActions>
    </Card>
  );
};

export default JobCard;
