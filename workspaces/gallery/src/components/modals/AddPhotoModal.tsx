import { useForm } from 'react-hook-form'
import { InjectedModalProps } from '../../contexts/modal'
import Button from '../shared/Button'
import Input from '../shared/Input'
import { zodResolver } from '@hookform/resolvers/zod'
import { addPhotoFormSchema, AddPhotoSchema } from '../../utils/schemas'
import { useSetRecoilState } from 'recoil'
import { photoState } from '../../state/photo'
import { nanoid } from 'nanoid'

const AddPhotoModal = ({ closeModal }: InjectedModalProps) => {
  const {
    handleSubmit,
    formState: { errors, isValid, isDirty },
    register,
  } = useForm<AddPhotoSchema>({
    resolver: zodResolver(addPhotoFormSchema),
  })
  const setPhotos = useSetRecoilState(photoState)

  const onSubmit = (data: AddPhotoSchema) => {
    setPhotos(prev => [{ ...data, id: nanoid(), width: 640, height: 480 }, ...prev])
    closeModal()
  }

  return (
    <form className="flex flex-col space-y-2" onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="Suspendisse elit massa"
        label="Label"
        error={errors.label}
        {...register('label')}
      />
      <Input
        placeholder="https://images.unsplash.com/photo-158439563082..."
        label="Photo URL"
        error={errors.url}
        {...register('url')}
      />
      <div className="flex justify-end">
        <Button type="button" onClick={closeModal} variant="text">
          Cancel
        </Button>
        <Button disabled={!isValid && !isDirty} type="submit">
          Submit
        </Button>
      </div>
    </form>
  )
}

export default AddPhotoModal
