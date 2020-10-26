import React from 'react'
import Link from 'next/link'

const Footer = () => {
	return (
		<div className='mx-auto container text-center py-8 text-xs'>
			<span>
				© 2020 iyansr.id built with{' '}
				<span role='img' aria-label='emoji'>
					🔥
				</span>{' '}
				by{' '}
				<Link href='/'>
					<a>Iyan Saputra</a>
				</Link>
			</span>
			<div className='flex justify-center mt-4 space-x-4'>
				<a href='http://facebook.com/iyan.scout' target='_blank' rel='noopener noreferrer' className='text-gray-500'>
					<div className='border border-gray-500 h-6 w-6 flex justify-center items-center rounded-sm transform hover:-translate-y-1 transition duration-200'>
						<span>
							<i className='icofont-facebook'></i>
						</span>
					</div>
				</a>
				<a href='http://instagram.com/iyan_saputraaa' target='_blank' rel='noopener noreferrer' className='text-gray-500'>
					<div className='border border-gray-500 h-6 w-6 flex justify-center items-center rounded-sm transform hover:-translate-y-1 transition duration-200'>
						<span>
							<i className='icofont-instagram'></i>
						</span>
					</div>
				</a>
				<a href='http://github.com/iyansr' target='_blank' rel='noopener noreferrer' className='text-gray-500'>
					<div className='border border-gray-500 h-6 w-6 flex justify-center items-center rounded-sm transform hover:-translate-y-1 transition duration-200'>
						<span>
							<i className='icofont-github'></i>
						</span>
					</div>
				</a>
			</div>
		</div>
	)
}

export default Footer