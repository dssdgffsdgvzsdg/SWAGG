import { fetchHighestEnjoyment, fetchLowestEnjoyment, fetchTierLength, fetchTotalScore } from "../../content.js";
import { localize } from "../../util.js";
 
export default {
    props: {
        level: {
            type: Object,
            required: true,
        },
        list: {
            type: Array,
            required: true,
        },
        descending: {
            type: Boolean,
            required: true,
        }
    },
    template: `
        <div class="tier" style="height: 100%; justify-content: center; align-items: center;">
            <h1>{{ level.name }}</h1>
            <h2 style="padding-top:1rem"># of levels in tier: {{ fetchTierLength(list, level.difficulty) }}</h2>
            <h2 style="padding-bottom:1rem">Points in tier: {{ localize(fetchTotalScore(list, level.difficulty)) }}</h2>
            <tr style="justify-content: center; align-items: center;">
                <td><h3 class="tier-info">Highest enjoyment: {{ fetchHighestEnjoyment(list, level.difficulty) || "N/A" }}</h3></td>
            </tr>
            <tr style="justify-content: center; align-items: center;">
                <td><h3 class="tier-info" style="padding-bottom:0.5rem">Lowest enjoyment: {{ fetchLowestEnjoyment(list, level.difficulty) || "N/A" }}</h3></td>
            </tr>
            <p style="padding-top:1.5rem">The levels {{ descending ? 'below' : 'above' }} are {{ ["Beginner", "Easy", "Medium", "Hard", "Insane", "Mythical", "Extreme", "Supreme", "Ethereal", "Legendary", "Silent", "Impossible"][level.difficulty] }} Levels.</p>
 
        </div>
    `,
    methods: {
        fetchTierLength,
        localize,
        fetchTotalScore,
        fetchHighestEnjoyment,
        fetchLowestEnjoyment,
    }
 
}
 
