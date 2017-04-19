import { Injectable } from '@angular/core';

export interface Song {
    id: number;
    userId: number;
    link: string;
    description: string;
    songWritingComments: Comment[];
    mixingComments: Comment[];
}

export interface Comment {
    userId: number;
    comment: string;
    votedAsHelpful?: boolean;
}

@Injectable()
export class SubmittedSongsService {
    public songs: Song[]; 

    constructor() {
        this.fillupSomeRandomData();
    }

    public addMixingComment(songId: number, comment: Comment) {
        const foundSong = this.songs.find((song: Song) => song.id === songId);

        if (foundSong) {
            foundSong.mixingComments.push(comment);
        }
    }

    public addSongWritingComment(songId: number, comment: Comment) {
        const foundSong = this.songs.find((song: Song) => song.id === songId);

        if (foundSong) {
            foundSong.songWritingComments.push(comment);
        }
    }

    private fillupSomeRandomData() {
        const s1: Song = {
            id: 1,
            userId: 1,
            link: 'https://www.youtube.com/watch?v=-nASaWLj2Cc',
            description: 'Hey, I just wanna get some feedback on this.',
            songWritingComments: [{
                userId: 2,
                comment: 'I really like, but it is a bit slow after the sad part',
                votedAsHelpful: true
            }],
            mixingComments: []
        }

        const s2: Song = {
            id: 2,
            userId: 3,
            link: 'https://www.youtube.com/watch?v=4rNFAE6Q9rc',
            description: 'So this is an older song. Comments, pls.',
            songWritingComments: [],
            mixingComments: [{
                userId: 1,
                comment: 'The drums sound too edited',
                votedAsHelpful: false
            }]
        }

        const s3: Song = {
            id: 3,
            userId: 4,
            link: 'https://www.youtube.com/watch?v=xh3Wveg4DMk',
            description: 'Do you like it?',
            songWritingComments: [],
            mixingComments: [{
                userId: 2,
                comment: 'Schwarzenegger\'s voice should come as it is coming through the grill of his helmet',
                votedAsHelpful: true
            }]
        }

        this.songs = [ s1, s2, s3 ];
    }
}