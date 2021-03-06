library("jsonlite")
df <- expand.grid(
  D = c(20, 100),
  V = c(325, 650),
  K = 2,
  N = c(1625, 3250, 6500),
  alpha0 = 1,
  gamma0 = 1
)

df$id <- seq_len(nrow(df))
lda_dir <- file.path(
  Sys.getenv("MICROBIOME_PLVM_DIR"),
  "src",
  "sim",
  "lda"
)

cat(
  toJSON(df, auto_unbox = TRUE),
  file = file.path(lda_dir, "pipeline", "experiment.json")
)
