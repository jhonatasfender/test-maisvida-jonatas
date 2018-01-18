
export class DTODoc { 
	
	public id: number;

	public firstName: string;
    public lastName: string;
    public specialty: string;
    public state: string;
    public city: string;
    public email: string;
    /**
     * 1 => ativo 0 => inativo
     */
    public active: boolean;

    /**
     * 1 => ocupado 0 => desocupado
     */
    public status: boolean;

	constructor(t?: any) {
		if(t != undefined) {
			this.id = t.id;
			this.firstName = t.firstName;
			this.lastName = t.lastName;
			this.specialty = t.specialty;
			this.state = t.state;
			this.city = t.city;
			this.email = t.email;
			this.active = t.active;
			this.status = t.status;
		}
	}

    /**
     * @return the id
     */
    public getId() : number {
        return this.id;
    }

    /**
     * @param id the id to set
     */
    public setId(id:number) {
        this.id = id;
    }

    /**
     * @return the firstName
     */
    public getFirstName(): string {
        return this.firstName;
    }

    /**
     * @param firstName the firstName to set
     */
    public setFirstName(firstName: string) {
        this.firstName = firstName;
    }

    /**
     * @return the lastName
     */
    public getLastName(): string {
        return this.lastName;
    }

    /**
     * @param lastName the lastName to set
     */
    public setLastName(lastName: string) {
        this.lastName = lastName;
    }

    /**
     * @return the specialty
     */
    public getSpecialty(): string {
        return this.specialty;
    }

    /**
     * @param specialty the specialty to set
     */
    public setSpecialty(specialty: string) {
        this.specialty = specialty;
    }

    /**
     * @return the state
     */
    public getState(): string {
        return this.state;
    }

    /**
     * @param state the state to set
     */
    public setState(state: string) {
        this.state = state;
    }

    /**
     * @return the city
     */
    public getCity(): string {
        return this.city;
    }

    /**
     * @param city the city to set
     */
    public setCity(city: string) {
        this.city = city;
    }

    /**
     * @return the active
     */
    public getActive() : boolean {
        return this.active;
    }

    /**
     * @param active the active to set
     */
    public setActive(active: boolean) {
        this.active = active;
    }

    /**
     * @return the status
     */
    public getStatus() : boolean {
        return this.status;
    }

    /**
     * @param status the status to set
     */
    public setStatus(status: boolean) {
        this.status = status;
    }

    /**
     * @return the email
     */
    public getEmail(): string {
        return this.email;
    }

    /**
     * @param email the email to set
     */
    public setEmail(email: string) {
        this.email = email;
    }
}
