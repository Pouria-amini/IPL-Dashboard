import { React } from 'react';

export const MatchSmallCard = ({teamName, match}) => {
    if (!match) return null;
    const otherTeam = teamName === match.team1 ? match.team2 : match.team1;
    return (
        <div className="MatchSmallCard">
            <h3>vs {otherTeam}</h3>
            <p>{match.matchWinner} won by {match.resultMargin} {match.result}</p>
        </div>
    );
}

