export interface MuseumObject {
	title: string;
	primaryImage: string;
	primaryImageSmall: string;
	objectDate: string;
	objectBeginDate: number;
	objectEndDate: number;
	artistDisplayName: string;
	artistDisplayBio: string;
	objectURL: string;
	tags: string[];
	location: string;
	medium: string;
}

export interface TimelineGame {
	data: MuseumObject[];
	score: number;
	currentObject: MuseumObject;
	isGameOver: boolean;
	isGameStarted: boolean;
}
