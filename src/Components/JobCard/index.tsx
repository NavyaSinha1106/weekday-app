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
        width: `calc(100% / 3 - 32px)`,
        borderRadius: "20px",
        padding: "16px",
        margin: "16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Chip
          variant="outlined"
          sx={{ fontSize: "9px", fontWeight: "400", my: 1 }}
        >
          ⏳Posted 3 days ago
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
            Estimated Salary: &nbsp;
            {data.minJdSalary} {data.minJdSalary && "-"} {data.maxJdSalary}{" "}
            {data.salaryCurrencyCode} ✅
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontWeight: 600, color: "#515151", fontSize: "15px" }}
          >
            About Company:
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "14px", fontWeight: 400, lineHeight: 1.5 }}
          >
            {expanded.includes(data.jdUid)
              ? data.jobDetailsFromCompany
              : data.jobDetailsFromCompany.slice(0, 360)}
          </Typography>
          <Box sx={{ textAlign: "center", position: "relative", top: "-20px" }}>
            <Button
              sx={{ color: "#4943da", textTransform: "capitalize" }}
              onClick={() => handleExpandClick(data.jdUid)}
            >
              View More
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
                Minimum Experience
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
            ⚡ Easy Apply
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
          <Typography variant="body1">Unlock Refferal Asks</Typography>
        </Button>
      </CardActions>
    </Card>
  );
};

export default JobCard;
