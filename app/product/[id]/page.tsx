// Client component (SingleProduct.tsx)
'use client'

import { useActionState } from 'react'
import { startTransition } from 'react'
import containerStyle from './products.module.css'
import { getImage } from '@/app/actions/actions'
import Skele from '../../../Skeletons/ImageSkeleton'

export default function SingleProduct() {
  // Action handling with useActionState
  const [state, actionget, pending] = useActionState(getImage, null)

  return (
    <div className={containerStyle.container}>
      <h3>Single Product</h3>
      <button
        onClick={() => {
          startTransition(() => {
            actionget()
          })
        }}
      >
        {pending ? <Skele /> : 'Click me'}
      </button>
      <p>{state?.description}</p>
    </div>
  )
}
