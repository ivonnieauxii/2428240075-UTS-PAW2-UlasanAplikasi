import z from 'zod'

export const StoreUlasanSchema = z.object({
  app_name: z.string().trim().min(2, "Nama aplikasi Wajib diisi"),
  reviewer_name: z.string().trim().min(3, "Nama Pengulas wajib diisi"),
  rating: z.double().trim()
  comment: z.string.trim()
})

export const UpdateUlasanSchema = z.object({
  app_name: z.string().trim().min(2, "Nama aplikasi Wajib diisi"),
  reviewer_name: z.string().trim().min(3, "Nama Pengulas wajib diisi"),
  rating: z.double().trim()
  comment: z.string.trim()
})