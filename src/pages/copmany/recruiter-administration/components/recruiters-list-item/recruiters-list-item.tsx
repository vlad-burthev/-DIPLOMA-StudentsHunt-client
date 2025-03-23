import { motion } from "framer-motion";
import type { FC } from "react";
import { recruiterListItem } from "../../../../../interfaces/company";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

interface RecruitersListItemProps {
  handleDelete: (id: string) => void;
  recruiter: recruiterListItem;
}

const RecruitersListItem: FC<RecruitersListItemProps> = ({
  recruiter,
  handleDelete,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }} // Анимация появления
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -50 }} // Анимация удаления
      transition={{ duration: 0.3 }}
    >
      <div>
        <div>
          <p>
            <span>{recruiter.name}</span>
            <span>{recruiter.surname}</span>
          </p>
          <p>{recruiter.email}</p>
        </div>
      </div>
      <div></div>
      <div>
        <Button
          variant="contained"
          color="error"
          onClick={() => handleDelete(recruiter.id)}
        >
          <DeleteIcon />
        </Button>
      </div>
    </motion.div>
  );
};

export default RecruitersListItem;
