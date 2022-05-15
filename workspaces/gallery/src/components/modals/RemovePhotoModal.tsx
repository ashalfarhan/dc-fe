import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useSetRecoilState } from 'recoil'
import { InjectedModalProps } from '../../contexts/modal'
import { photoState } from '../../state/photo'
import { deletePhotoFormSchema, DeletePhotoSchema } from '../../utils/schemas'
import Button from '../shared/Button'
import Input from '../shared/Input'

type RemoveImageModalProps = {
  photoId: string
} & InjectedModalProps

const RemoveImageModal = ({ closeModal, photoId }: RemoveImageModalProps) => {
  const setPhotos = useSetRecoilState(photoState)
  const {
    handleSubmit,
    formState: { errors, isDirty, isValid },
    register,
  } = useForm<DeletePhotoSchema>({ resolver: zodResolver(deletePhotoFormSchema) })
  const handleDelete = ({ password }: DeletePhotoSchema) => {
    if (!photoId) return
    if (!password) return
    setPhotos(prev => prev.filter(photo => photo.id !== photoId))
    closeModal()
  }

  return (
    <form className="flex flex-col space-y-4" onSubmit={handleSubmit(handleDelete)}>
      <Input
        label="Password"
        type="password"
        placeholder="********"
        {...register('password')}
        error={errors.password}
      />
      <div className="flex justify-end">
        <Button type="button" onClick={closeModal} variant="text">
          Cancel
        </Button>
        <Button type="submit" color="danger" disabled={!isDirty && !isValid}>
          Delete
        </Button>
      </div>
    </form>
  )
}

export default RemoveImageModal
