// Used for RefSeq ID
export const refseqValidation = (val) => {
    return /^[a-zA-Z0-9_]+([-.][a-zA-Z0-9_]+)*$/.test(val)
  }

  // Used for Uniprot ID
export const uniprotValidation = (val) => {
  return /^[A-Za-z0-9_]+$/.test(val);
}

// Use for Protein Sequence
export const proteinValidation = (val) => {
  return /^[ACDEFGHIKLMNPQRSTVWYacdefghiklmnpqrstvwy]*$/.test(val)
}