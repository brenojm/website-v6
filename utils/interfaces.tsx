import { SelectChangeEvent } from "@mui/material";

export type LanguageProps = {
    language: string;
    handleChange: ((event: SelectChangeEvent<string>) => void);
  }