import { NextPage } from 'next'
import React from 'react'
import Header from '../components/header'
import { api } from '../utils/api'

const dashboard: NextPage = () => {

	const { mutate } = api.admin.sensitive.useMutation()

  return (
	<>
		<Header heading="Admin Dashboard"/>
		DashBoard
		<button type='button' onClick={() => mutate()}>Mutate</button>
	</>
  )
}

export default dashboard