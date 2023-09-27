// Used for RefSeq ID
export const refseqValidation = new RegExp(
    /^[a-zA-Z0-9_]+([-.][a-zA-Z0-9_]+)*$/
  );

// Used for Uniprot ID
export const uniprotValidation = new RegExp(/^[A-Za-z0-9_]+$/);

// Use for Protein Sequence
export const proteinValidation = new RegExp(
    /^[ACDEFGHIKLMNPQRSTVWYacdefghiklmnpqrstvwx]*$/
    );

