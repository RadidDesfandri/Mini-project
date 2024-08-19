import { Request } from "express"
import multer from "multer"
import path from "path"

type DestinationCallback = (error: Error | null, destination: string) => void
type FileNameCallback = (error: Error | null, fileName: string) => void

export const uploader = (filePrefix: string, folderName?: string) => {
    const defaultDir = path.join(__dirname, "../../public")

    const storage = multer.diskStorage({
        destination: (
            req: Request,
            file: Express.Multer.File,
            cb: DestinationCallback
        ) => {
            const destination = folderName ? defaultDir + folderName : defaultDir
            cb(null, destination)
        },
        filename: (
            req: Request,
            file: Express.Multer.File,
            cb: FileNameCallback
        ) => {
            const originalNamePart = file.originalname.split('.')
            const fileExtension = originalNamePart[originalNamePart.length - 1] //rumus untuk mendapatkan index terakhir
            const newFileName = filePrefix + Date.now() + "." + fileExtension
            cb(null, newFileName)
        }
    })

    return multer({storage: storage})
}