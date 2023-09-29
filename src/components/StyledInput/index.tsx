import { Input } from "@chakra-ui/react";
import { styled } from "styled-components";

export const StyledInput = styled(Input)`
border: "1px solid rgba(255,255,255,0.4)";
padding: 1.5rem;
&:active,
&:focus {
    color: #c49b63;
    border: "4px solid #c49b63 !important";
}

`
