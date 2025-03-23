import type { FC } from "react";
import {
  useDeleteRecruiterMutation,
  useGetAllCompanyRecruitersQuery,
  companyApi,
} from "../../../../../api/companyApi";
import { format } from "date-fns";
import { uk } from "date-fns/locale";
import { useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { recruiterListItem } from "../../../../../interfaces/company";
import RecruitersListItem from "../recruiters-list-item/recruiters-list-item";

const RecruitersList: FC = () => {
  const { data, isLoading } = useGetAllCompanyRecruitersQuery();
  const [deleteRecruiterMutation] = useDeleteRecruiterMutation();
  const dispatch = useDispatch<any>();

  if (isLoading) return "loading recruiters";

  const handleDelete = async (id: string) => {
    const patchResult = dispatch(
      companyApi.util.updateQueryData(
        "getAllCompanyRecruiters",
        undefined,
        (draft) => {
          if (!draft) return [];
          return draft.filter(
            (recruiter: recruiterListItem) => recruiter.id !== id
          );
        }
      )
    );

    try {
      await deleteRecruiterMutation(id).unwrap();
    } catch (error) {
      patchResult.undo();
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <AnimatePresence>
        {data?.map((recruiter) => (
          <RecruitersListItem
            key={recruiter.id}
            handleDelete={handleDelete}
            recruiter={recruiter}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default RecruitersList;
