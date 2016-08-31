package controllers;

import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;
import views.html.*;

public class Application extends Controller {

    public static Result index() {
        return ok(index.render("Your new application is ready."));
    }

    public static Result reportIndex() {
        return ok(index.render("Your new application is ready."));
    }

    public static Result mediaIndex() {
        System.out.println("mediaIndex : ");

        ObjectNode json = Json.newObject();
        ArrayNode arr = json.arrayNode();
        ObjectNode element1 = Json.newObject();
        element1.put("id", 123);
        element1.put("author", "negishi");
        element1.put("text", "pool");
        arr.add(element1);

        ObjectNode element2 = Json.newObject();
        element2.put("id", 124);
        element2.put("author", "yoshinori");
        element2.put("text", "poooooool");
        arr.add(element2);

        json.putArray("results").addAll(arr);

        return ok(json);
    }

    public static Result someIndex() {
        ObjectNode json = Json.newObject();
        ArrayNode arr = json.arrayNode();
        ObjectNode element1 = Json.newObject();
        element1.put("id", 223);
        element1.put("author", "angel");
        element1.put("text", "rich");
        arr.add(element1);

        ObjectNode element2 = Json.newObject();
        element2.put("id", 224);
        element2.put("author", "aaaaaa");
        element2.put("text", "rilok");
        arr.add(element2);

        json.putArray("results").addAll(arr);

        //return ok(json);
        return notFound();
    }
}
