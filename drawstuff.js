/* classes */

// Color constructor
class Color
{
    constructor(r,g,b,a) {
        try {
            if ((typeof(r) !== "number") || (typeof(g) !== "number") || (typeof(b) !== "number") || (typeof(a) !== "number"))
                throw "color component not a number";
            else if ((r<0) || (g<0) || (b<0) || (a<0))
                throw "color component less than 0";
            else if ((r>255) || (g>255) || (b>255) || (a>255))
                throw "color component bigger than 255";
            else {
                this.r = r; this.g = g; this.b = b; this.a = a;
            }
        } // end try

        catch (e) {
            console.log(e);
        }
    } // end Color constructor

        // Color change method
    change(r,g,b,a) {
        try {
            if ((typeof(r) !== "number") || (typeof(g) !== "number") || (typeof(b) !== "number") || (typeof(a) !== "number"))
                throw "color component not a number";
            else if ((r<0) || (g<0) || (b<0) || (a<0))
                throw "color component less than 0";
            else if ((r>255) || (g>255) || (b>255) || (a>255))
                throw "color component bigger than 255";
            else {
                this.r = r; this.g = g; this.b = b; this.a = a;
            }
        } // end throw

        catch (e) {
            console.log(e);
        }
    } // end Color change method
} // end color class

/* utility functions */
// Vector class
class Vector
{
    constructor(x,y,z) {
        this.set(x,y,z);
    } // end constructor

    // sets the components of a vector
    set(x,y,z) {
        try {
            if ((typeof(x) !== "number") || (typeof(y) !== "number") || (typeof(z) !== "number"))
                throw "vector component not a number";
            else
                this.x = x; this.y = y; this.z = z;
        } // end try

        catch(e) {
            console.log(e);
        }
    } // end vector set

    // copy the passed vector into this one
    copy(v) {
        try {
            if (!(v instanceof Vector))
                throw "Vector.copy: non-vector parameter";
            else
                this.x = v.x; this.y = v.y; this.z = v.z;
        } // end try

        catch(e) {
            console.log(e);
        }
    }

    toConsole(prefix) {
        console.log(prefix+"["+this.x+","+this.y+","+this.z+"]");
    } // end to console

    // static dot method
    static dot(v1,v2) {
        try {
            if (!(v1 instanceof Vector) || !(v2 instanceof Vector))
                throw "Vector.dot: non-vector parameter";
            else
                return(v1.x*v2.x + v1.y*v2.y + v1.z*v2.z);
        } // end try

        catch(e) {
            console.log(e);
            return(NaN);
        }
    } // end dot static method

    // static add method
    static add(v1,v2) {
        try {
            if (!(v1 instanceof Vector) || !(v2 instanceof Vector))
                throw "Vector.add: non-vector parameter";
            else
                return(new Vector(v1.x+v2.x,v1.y+v2.y,v1.z+v2.z));
        } // end try

        catch(e) {
            console.log(e);
            return(new Vector(NaN,NaN,NaN));
        }
    } // end add static method

    // static subtract method, v1-v2
    static subtract(v1,v2) {
        try {
            if (!(v1 instanceof Vector) || !(v2 instanceof Vector))
                throw "Vector.subtract: non-vector parameter";
            else {
                var v = new Vector(v1.x-v2.x,v1.y-v2.y,v1.z-v2.z);
                //v.toConsole("Vector.subtract: ");
                return(v);
            }
        } // end try

        catch(e) {
            console.log(e);
            return(new Vector(NaN,NaN,NaN));
        }
    } // end subtract static method

    // static divide method, v1.x/v2.x etc
    static divide(v1,v2) {
        try {
            if (!(v1 instanceof Vector) || !(v2 instanceof Vector))
                throw "Vector.divide: non-vector parameter";
            else {
                var v = new Vector(v1.x/v2.x,v1.y/v2.y,v1.z/v2.z);
                //v.toConsole("Vector.divide: ");
                return(v);
            }
        } // end try

        catch(e) {
            console.log(e);
            return(new Vector(NaN,NaN,NaN));
        }
    } // end divide static method

    // static divide method, v1.x/v2.x etc
    static multiply(v1,v2) {
        try {
            if (!(v1 instanceof Vector) || !(v2 instanceof Vector))
                throw "Vector.multiply: non-vector parameter";
            else {
                var v = new Vector(v1.x*v2.x,v1.y*v2.y,v1.z*v2.z);
                //v.toConsole("Vector.divide: ");
                return(v);
            }
        } // end try

        catch(e) {
            console.log(e);
            return(new Vector(NaN,NaN,NaN));
        }
    } // end multiply static method

    // static scale method
    static scale(c,v) {
        try {
            if (!(typeof(c) === "number") || !(v instanceof Vector))
                throw "Vector.scale: malformed parameter";
            else
                return(new Vector(c*v.x,c*v.y,c*v.z));
        } // end try

        catch(e) {
            console.log(e);
            return(new Vector(NaN,NaN,NaN));
        }
    } // end scale static method

    // static normalize method
    static normalize(v) {
        try {
            if (!(v instanceof Vector))
                throw "Vector.normalize: parameter not a vector";
            else {
                var lenDenom = 1/Math.sqrt(Vector.dot(v,v));
                return(Vector.scale(lenDenom,v));
            }
        } // end try

        catch(e) {
            console.log(e);
            return(new Vector(NaN,NaN,NaN));
        }
    } // end scale static method
} // end Vector class

// draw a pixel at x,y using color
function drawPixel(imagedata,x,y,color)
{
    try {
        if ((typeof(x) !== "number") || (typeof(y) !== "number"))
            throw "drawpixel location not a number";
        else if ((x<0) || (y<0) || (x>=imagedata.width) || (y>=imagedata.height))
            throw "drawpixel location outside of image";
        else if (color instanceof Color) {
            var pixelindex = (y*imagedata.width + x) * 4;
            imagedata.data[pixelindex] = color.r;
            imagedata.data[pixelindex+1] = color.g;
            imagedata.data[pixelindex+2] = color.b;
            imagedata.data[pixelindex+3] = color.a;
        } else
            throw "drawpixel color is not a Color";
    } // end try

    catch(e) {
        console.log(e);
    }
} // end drawPixel

function getJSONFile(url,descr)
{
    try {
        if ((typeof(url) !== "string") || (typeof(descr) !== "string"))
            throw "getJSONFile: parameter not a string";
        else {
            var httpReq = new XMLHttpRequest(); // a new http request
            httpReq.open("GET",url,false); // init the request
            httpReq.send(null); // send the request
            var startTime = Date.now();
            while ((httpReq.status !== 200) && (httpReq.readyState !== XMLHttpRequest.DONE)) {
                if ((Date.now()-startTime) > 3000)
                    break;
            } // until its loaded or we time out after three seconds
            if ((httpReq.status !== 200) || (httpReq.readyState !== XMLHttpRequest.DONE))
                throw "Unable to open "+descr+" file!";
            else
                return JSON.parse(httpReq.response);
        } // end if good params
    } // end try

    catch(e) {
        console.log(e);
        return(String.null);
    }
}

function getSurfaceNormal(box, isect)
{
    var delta = 0.00001;
    if(Math.abs(isect.x - box.lx) < delta)
        return (new Vector(-1, 0, 0));
    if(Math.abs(isect.x - box.rx) < delta)
        return (new Vector(1, 0, 0));

    if(Math.abs(isect.y - box.ty) < delta)
        return (new Vector(0, 1, 0));
    if(Math.abs(isect.y - box.by) < delta)
        return (new Vector(0, -1, 0));

    if(Math.abs(isect.z == box.rz) < delta)
        return (new Vector(0, 0, -1));
    if(Math.abs(isect.z == box.fz)<delta)
        return (new Vector(0, 0, 1));
}

function raySlabIntersection (ray, slab, index)
{
    // console.log(ray); console.log(slab);
    var t0 = (slab[0] - ray[0][index])/ray[1][index];
    var t1 = (slab[1] - ray[0][index])/ray[1][index];
    var t0_idx = Math.min(t0, t1);
    var t1_idx = Math.max(t0, t1);
    return({"t0":t0_idx, "t1":t1_idx});
}

function rayBoxIntersection(ray, box, clipVal)
{
    try
    {
        if (!(ray instanceof Array) || !(box instanceof Object))
        {
            throw "RayEllipsoidIntersect: ray or ellipsoid are not formatted well";
        }
        else if (ray.length != 2)
        {
            throw "RayEllipsoidIntersect: badly formatted ray";
        }
        else
        {

            var t_max = Number.MIN_VALUE; var t_min = Number.MAX_VALUE;
            if (ray[1].x != 0)
            {
                var tx = raySlabIntersection(ray, [box.lx, box.rx], "x");
                t_max = Math.max(t_max, tx.t0);
                t_min = Math.min(t_min, tx.t1);
            }
            if (ray[1].y != 0)
            {
                var ty = raySlabIntersection(ray, [box.by, box.ty], "y");
                t_max = Math.max(t_max, ty.t0);
                t_min = Math.min(t_min, ty.t1);
            }
            if (ray[1].z != 0)
            {
                var tz = raySlabIntersection(ray, [box.fz, box.rz], "z");
                t_max = Math.max(t_max, tz.t0);
                t_min = Math.min(t_min, tz.t1);
            }
            if( t_max <= t_min && t_max >= clipVal){
                var isect =Vector.add(ray[0], Vector.scale(t_max, ray[1]));
                return({"exists": true, "xyz": isect,"t": t_max});
            }
            else
            {
                return({"exists": false, "xyz": NaN, "t": NaN});
            }
        }
    }
     catch(e) {
        //console.log(e);
        return({"exists": false, "xyz": NaN, "t": NaN});
    }
}


function isLightOccluded(L, isect, boxIndex, boxes)
{
    var box_index = 0;
    var light_occluded = false;
    var occluder_intersection = {};
    while(!light_occluded && (box_index < boxes.length) )
    {
        if(box_index == boxIndex) {
            box_index++;
            continue;
        }
        occluder_intersection = rayBoxIntersection([isect, L], boxes[box_index], 0);
        if(occluder_intersection.exists && occluder_intersection.t < 1 && occluder_intersection.t > 0)
        {
            light_occluded = true;
        }
        else
        {
            box_index += 1;
        }
    }

    return light_occluded;
}

function shadeIntersection (intersection, boxIndex, lights, boxes)
{
    try
    {
        if (   !(intersection instanceof Object) || !(typeof(boxIndex) === "number")
            || !(lights instanceof Array) || !(boxes instanceof Array))
        {
            throw "shadeIsect: bad parameter passed";
        }
        else if (RENDER_METHOD == renderTypes.ISECT_ONLY)
        {
            var r = boxes[boxIndex].diffuse[0];
            var g = boxes[boxIndex].diffuse[1];
            var b = boxes[boxIndex].diffuse[2];
            return(new Color(255*r,255*g,255*b,255));
        }
        else // Color the intersections
        {

            var color = new Color(0, 0, 0, 255);
            var box = boxes[boxIndex];
            var light_Occluded = false;
            var light_location = new Vector(0, 0 ,0);
            var num_of_lights = lights.length;
            for(var light_idx = 0; light_idx < num_of_lights; light_idx++)
            {
                 // add in the ambient light
                 // console.log(color);
                color.r += lights[light_idx].ambient[0] * box.ambient[0]; // ambient term r
                color.g += lights[light_idx].ambient[1] * box.ambient[1]; // ambient term g
                color.b += lights[light_idx].ambient[2] * box.ambient[2]; // ambient term b
                // console.log(color);

                light_location.set(lights[light_idx].x, lights[light_idx].y, lights[light_idx].z);
                // light_location.set(Eye.x, Eye.y, Eye.z);
                // light_location.set(0.5, 0.95, 0.15); // Light on the ceiling
                // light_location.set(0.90, 0.95, 0.25); // Light on right corner ceiling
                var light_vector = Vector.subtract(light_location, intersection.xyz);
                var L = Vector.normalize(light_vector);

                var shadowed = (RENDER_METHOD == renderTypes.LIT_SHADOWS) ?
                                isLightOccluded(light_vector, intersection.xyz, boxIndex, boxes) : false;
                // No shadows
                if(!shadowed)
                {
                    // DIFFUSE
                    var N = getSurfaceNormal(box, intersection.xyz);
                    var diffuse_factor = Math.max(0, Vector.dot(N, L));
                    if(diffuse_factor > 0)
                    {
                        color.r += lights[light_idx].diffuse[0] * box.diffuse[0] * diffuse_factor;
                        color.g += lights[light_idx].diffuse[1] * box.diffuse[1] * diffuse_factor;
                        color.b += lights[light_idx].diffuse[2] * box.diffuse[2] * diffuse_factor;

                    }

                    // SPECULAR
                    var V = Vector.normalize(Vector.subtract(Eye, intersection.xyz));
                    var H = Vector.normalize(Vector.add(L, V));

                    var spec_factor = Math.max(0, Vector.dot(N,H));

                    if(spec_factor > 0)
                    {
                        var new_spec_factor = Math.pow(spec_factor, box.n);
                        color.r += lights[light_idx].specular[0] * box.specular[0] * new_spec_factor; // specular term
                        color.g += lights[light_idx].specular[1] * box.specular[1] * new_spec_factor; // specular term
                        color.b += lights[light_idx].specular[2] * box.specular[2] * new_spec_factor; // specular term

                    }
                }
            }// end lights
            color.r = 255 * Math.min(1,color.r/num_of_lights); // clamp max value to 1
            color.g = 255 * Math.min(1,color.g/num_of_lights); // clamp max value to 1
            color.b = 255 * Math.min(1,color.b/num_of_lights); // clamp max value to 1
            // console.log(color);


            return color;
        }
    }
    catch(e) {
        console.log(e);
        return(Object.null);
    }
}


function rayCastBoxes(context)
{
    var inputBoxes = getJSONFile(INPUT_BOXES_URL,"boxes");
    var inputLights = getJSONFile(INPUT_LIGHTS_URL,"lights");
    var canvas_width = context.canvas.width;
    var canvas_height = context.canvas.height;
    var imagedata = context.createImageData(canvas_width,canvas_height);
    console.log(inputBoxes);
    if (inputBoxes != String.null)
    {
        // initialize the pixel coordinates
        var window_x0 = 0; var window_y0 = 0;
        var num_of_boxes = inputBoxes.length;
        var ray_direction = new Vector(0,0,0);
        var closest_t = Number.MAX_VALUE;
        var color = new Color(0,0,0,0);
        var intersection = {};

        // Loop over the pixels
        var curr_x = WIN_LEFT; var dx = (WIN_RIGHT - WIN_LEFT)*1/(canvas_width-1);
        var curr_y = WIN_TOP; var dy = (WIN_BOTTOM - WIN_TOP)*1/(canvas_height-1);

        for (window_y0 = 0; window_y0 < canvas_height; window_y0++)
        {
            curr_x = WIN_LEFT;
            for (window_x0 = 0; window_x0 < canvas_width; window_x0++)
            {
                //initialize closest t
                closest_t = Number.MAX_VALUE;
                // set pixel to background color
                color.change(0, 0, 0, 255);
                //set Ray direction
                ray_direction.copy(Vector.subtract(new Vector(curr_x, curr_y, WIN_Z), Eye));
                for (var box_idx = 0; box_idx < num_of_boxes; box_idx++)
                {


                    intersection = rayBoxIntersection([Eye,ray_direction], inputBoxes[box_idx], 1);
                    // console.log(intersections);
                    if (intersection.exists)
                    {
                        if (intersection.t < closest_t)
                        {
                            closest_t = intersection.t;
                            color = shadeIntersection(intersection, box_idx, inputLights, inputBoxes);
                        }
                    }

                }// end for box_idx loop
                drawPixel(imagedata, window_x0, window_y0, color);
                curr_x += dx;
                // break;
            }     // end of x pixel loop
            curr_y += dy;

            // break;
        }    // end loop for y pixels
        context.putImageData(imagedata, 0, 0);
    } // End if boxxes found
} // end ray casting boxes.

/* constants and globals */

const WIN_Z = 0;
const WIN_LEFT = 0, WIN_RIGHT = 1;
const WIN_BOTTOM = 0, WIN_TOP = 1;
const INPUT_LIGHTS_URL = "https://ncsucgclass.github.io/prog1/lights.json";
const INPUT_BOXES_URL = "https://ncsucgclass.github.io/prog1/boxes.json";
const renderTypes = {
        ISECT_ONLY: 1,     // render white if intersect in pixel
        LIT: 2,            // render lit color if intersect in pixel
        LIT_SHADOWS: 3     // render lit/shadowed color in intersect in pixel
    };
const RENDER_METHOD = renderTypes.LIT_SHADOWS; // show intersections unlit in white

var Eye = new Vector(0.5,0.5,-0.5); // set the eye position


function main() {

    // Get the canvas and context
    var canvas = document.getElementById("viewport");
    var context = canvas.getContext("2d");
    rayCastBoxes(context);
}
