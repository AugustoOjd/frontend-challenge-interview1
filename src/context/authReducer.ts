export interface AuthState {
    status: 'cheking' | 'authenticated' | 'not-authenticated'
    user: any,
}

export type AuthAction = 
    | { type: 'logIn', payload:     { user: any} }
    | { type: 'notAuthenticated' }
    | { type: 'logout'}


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
        default:
            return {
                ...state
            };
    }
}