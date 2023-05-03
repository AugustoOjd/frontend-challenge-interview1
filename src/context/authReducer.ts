export interface AuthState {
    status: 'cheking' | 'authenticated' | 'not-authenticated'
    user: any,
    error: boolean
}

export type AuthAction = 
    | { type: 'logIn', payload:     { user: any} }
    | { type: 'notAuthenticated' }
    | { type: 'logout'}
    | { type: 'error', payload: boolean}


export const authReducer = (state: AuthState, action: AuthAction ): AuthState =>{ 

    switch (action.type) {
        case 'logIn':
            
            return {
                ...state,
                status: 'authenticated'
            };
    
        case 'logout':
            return {
                ...state,
                status: 'not-authenticated'
            }

        case 'error':
            return {
                ...state,
                status: 'not-authenticated',
                error: true
            }
        default:
            return {
                ...state
            };
    }
}