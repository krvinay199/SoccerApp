import { UpdatePlayer, addNewPlayer, deleteAllPlayer, deletePlayer, getPlayerWithID, getPlayers } from "../controllers/playerController";

const routes = (app) => {
  app
    .route("/players")
    //GET endpoint
    .get(getPlayers)
    // POST endpoint
    .post(addNewPlayer)
    //Delete All Players
    .delete(deleteAllPlayer)

    app
    .route("/players/:PlayerId")
    //GET specific player
    .get(getPlayerWithID)
    //Update a specific player
    .put(UpdatePlayer)
    //Delete a specific player
    .delete(deletePlayer) 
    
};

export default routes;