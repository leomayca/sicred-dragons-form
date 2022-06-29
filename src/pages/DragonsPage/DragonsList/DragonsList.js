import React, { useContext } from 'react'

import { AuthContext } from '../../../contexts/auth.context'

const DragonsList = () => {
    const { handleLogout } = useContext(AuthContext)

    return (
        <button type="button" onClick={handleLogout}>
            Sair
        </button>
    )
}

export default DragonsList
