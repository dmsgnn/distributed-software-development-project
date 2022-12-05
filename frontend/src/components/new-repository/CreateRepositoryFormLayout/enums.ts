export enum CreateRepositorySteps {
	NewRepository = 'newRepository',
	RepositoryDetails = 'repositoryDetails',
	Priorities = 'priorities',
	AddTeam = 'addTeam',
	Success = 'success',
}

export const steps = [
	CreateRepositorySteps.NewRepository,
	CreateRepositorySteps.RepositoryDetails,
	CreateRepositorySteps.Priorities,
	CreateRepositorySteps.AddTeam,
];
