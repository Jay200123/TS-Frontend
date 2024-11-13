import { AccessoryValues } from '../../interface'
import { useFormik } from 'formik'
import { toast } from 'react-toastify'
import { accessoryValidationSchema } from '../../validations'
import { useAccessoriesStore } from '../../state'

const AccessoryForm: React.FC = () => {
  const { createAccessory } = useAccessoriesStore()
 

  const formik = useFormik<AccessoryValues>({
    initialValues: {
      accessory_name: '',
      price: 0,
      quantity: 0,
      image: []
    },
    validationSchema: accessoryValidationSchema,
    onSubmit: async values => {
      const formData = new FormData()
      formData.append('accessory_name', values.accessory_name)
      formData.append('price', values.price.toString())
      formData.append('quantity', values.quantity.toString())
      values.image.forEach(file => {
        formData.append('image', file)
      })
      try {
        await createAccessory(formData)
        toast.success('Accessory created successfully')
        formik.resetForm()
      } catch (error) {
        toast.error('Failed to create accessory')
      }
    }
  })

  return (
    <form
      className='flex items-center justify-center p-12 m-12 border border-black'
      onSubmit={formik.handleSubmit}
    >
      <div className='flex flex-col items-center p-4 overflow-hidden bg-blue-300 rounded-sm max-h-lvh'>
        <div className='flex items-center justify-between w-full p-4 m-3 text-left border-b border-black'>
          <label className='text-sm'>Accessory Name</label>
          <input
            type='text'
            name='accessory_name'
            className='p-1 m-1 text-sm rounded-md'
            onChange={formik.handleChange}
            value={formik.values.accessory_name}
          />
        </div>
        <div className='flex items-center justify-between w-full p-4 m-3 text-left border-b border-black '>
          <label className='text-sm'>Price</label>
          <input
            type='number'
            name='price'
            className='p-1 m-1 text-sm rounded-md'
            onChange={formik.handleChange}
            value={formik.values.price}
          />
        </div>
        <div className='flex items-center justify-between w-full p-4 m-3 text-left border-b border-black'>
          <label className='text-sm'>Quantity</label>
          <input
            type='number'
            name='quantity'
            className='p-1 m-1 text-sm rounded-md'
            onChange={formik.handleChange}
            value={formik.values.quantity}
          />
        </div>
        <div className='flex items-center justify-between w-full p-2 m-1 text-left border-b border-black '>
          <label className='text-sm'>Images</label>
          <input
            type='file'
            name='image'
            multiple
            onChange={e => {
              const files = Array.from(e.currentTarget.files || [])
              formik.setFieldValue('image', files)
            }}
          />
        </div>
        <button
          className='p-4 transition duration-300 ease-in-out border rounded-md cursor-pointer border-black-300 hover:bg-blue-500 hover:text-white'
          type='submit'
        >
          Create Accessory
        </button>
      </div>
    </form>
  )
}

export default AccessoryForm
