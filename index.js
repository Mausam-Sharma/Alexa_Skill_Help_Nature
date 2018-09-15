
const Alexa = require('ask-sdk-core');
const i18n = require('i18next');
const sprintf = require('i18next-sprintf-postprocessor');

var counter = 0 ;

const data0 = [


' Clean air filters, on your air conditioning unit, at least once a month. ',
' If, you have central air conditioning, do not close vents in unused rooms. ',
' Lower the thermostat on your water heater, to 120° celsius. ',
' Wrap your water heater, in an insulated blanket. ',
' Turn down or shut off your water heater, when you will be away, for extended period of time. ', 			//5
' Turn off unneeded lights, even when leaving a room for a short time.',
' Set your refrigerator temperature, at 36° to 38° ,and your freezer, at 0° to 5° .', 
' When using an oven, minimize door opening , while it is in use; it reduces oven temperature by 25° to 30°, every time you open the door. ', 
' Clean the lint filter, in your dryer, after every load, so that it uses less energy.',
' Unplug seldom used appliances. It saves energy.', 																	//10
' Use a microwave oven, whenever you can, instead of a conventional oven, or stove.',
' Wash clothes with warm water, or, cold water, instead of hot.',
' Reverse ceiling fans to counter clockwise for summer, from clockwise in winter. ',
' Purchase appliances, and office equipments, with the Energy Star label; old refrigerators use up to 50% more electricity, than newer models. ',
' Use compact fluorescent light bulbs, — they use 75% less energy, and last 10-13 times longer, than ordinary bulbs.',    //15
' Keep your air conditioner set, at a temperature of 23° to 25° Celcius. ',
' Install, and use, solar panels at home. ',
' Insulate your home, as best as you can. ',
' Install weather stripping, around all doors, and windows. ',
' Plant trees, to shade your home, and AC unit.',    //20
' Have a home energy audit done. ',
' Replace old windows, with energy efficient ones.',
' Connect your outdoor lights, to a timer, or light sensors.',
' Buy green electricity, that is electricity produced by low, or even, zero pollution facilities.',    //24



' Eliminate mercury from your home, by purchasing items without mercury, and ,dispose of items containing mercury, at an appropriate, drop-off facility when necessary, example, old  thermometers.',
' Learn about alternatives, for household cleaning items, that do not use hazardous chemicals, consider alternatives, like baking soda, scouring pads,and water.',
' Buy the right amount of paint, for the job, but, if you have leftover materials, share with neighbors, charities ,or theater groups.',
' When no good alternatives exist, to a toxic item, find the least amount required, for an effective, sanitary result. ',
' Have paint in your home, tested for lead. If you have lead-based paint, cover it with wall paper, or, other material instead of sanding it, or burning it off. ',
' Use traps, instead of rat, and mouse  poisons, and insect killers. ',		//30
' Use cedar chips, or aromatic herbs, instead of mothballs.  ',
' Have your home tested for radioactive gas, radon.',     //32

' Avoid using, leaf blowers, and other dust-producing equipments. ',
' Use an electric lawn mower, instead of a gas-powered one.',
' Leave grass clippings on the yard,  they decompose, and return nutrients to the soil.',  //35
' Use recycled wood chips, as mulch to keep weeds down, retain moisture, and prevent erosion.',
' Use only the required amount of fertilizer.',
' Create a wildlife habitat, by planting native, or drought resistant plants.',
' Water grass before 7 am.',
' Rent or borrow items, like ladders, and chain saws, that are seldom used.',
' Take actions, that use non-hazardous components, example to ward off pests, plant marigolds in a garden, instead of using pesticides. ',
' Put leaves, in a compost heap, instead of burning them, or throwing them away.',  //42



' Copy and print on both sides of paper. ',
' Reuse items like envelopes, folders, and paper clips. ',
' Use mailer sheets for interoffice mail, instead of an envelope. ',		//45
' Set up a bulletin board for memos, instead of sending a copy to each employee.',
' Use e-mail, instead of paper correspondence. ',
' Print in draft format, to conserve ink. ',
' Use recycled paper, as much as you can.',
' Use discarded paper for scrap paper. ',		//50
' Encourage your school, or company, to print documents with soy based inks, which are less toxic. ',
' Use a ceramic coffee mug, instead of a disposable cup. ',
' Use the stairs, instead of the elevator. ',
' Shut off electrical equipments, in the evening when you leave work, including your computer monitor. ',
' Recycle printer cartridges. ',
' Ask your employer to consider flexible work schedules, or telecommuting. ',		//56



' Use environmentally friendly gas cans, with features such as cut-off valves, to reduce harmful fumes.',
' Avoid the drive-thru lanes.',
' Use car pooling. ',
' Report smoking vehicles, to your local air agency. ',		//60
' Don’t use your wood stove, or fireplace, when air quality is poor. ',
' Avoid slow-burning, smoldering fires.',
' Burn seasoned wood, it burns cleaner than green wood. ',
' Use solar power for home, and water heating',
' Use water-based paints, stains, finishes and paint strippers.',
' Purchase radial tires for your vehicle, and keep them properly inflated. ',
' Paint with brushes, or rollers, instead of using spray paints, to minimize harmful emissions. ',
' Ignite charcoal barbecues with an electric probe, or other alternative to lighter fluid.',
' Avoid using a wood stove, and switch to induction cooktops to avoid gas emissions. ',
' Walk, or ride your bicycle, instead of driving, whenever possible. ',		//70
' Don’t idle in the carpool line , the emissions are bad for children and adults.',		//71



' Check and fix any water leaks.', 		//72
' Install water-saving devices, on your faucets, and toilets. ', 
' Don’t wash dishes with the water, running continuously. ', 
' Wash and dry only full loads of laundry, and dishes. ', 		//75
' Follow your community’s water use restrictions, or guidelines.', 
' Install a low-flow shower head.', 
' Replace old toilets with new ones, that use less water.', 
' Turn off washing machine’s water supply, to prevent leaks, when away, on vacation.', 
'  Fill a half gallon jug with water, and place in the toilet tank, to reduce water used in flushing.', 		//80


' Revegetate or mulch disturbed soil, as soon as possible. ',		//81
' Never dump anything down a storm drain. ',	
' Have your septic tank pumped, and system inspected, regularly.',	
' Check your car for oil, or other leaks, and recycle motor oil.',	
' Take your car to a car wash, instead of washing it in the driveway. ',	
' Use drip irrigation for your gardens, and farms. ',		//86



' Buy items in bulk from loose bins, when possible to reduce the packaging.',			//87
' Avoid products with several layers of packaging, when only one is sufficient. About 33% of what we throw away, is packaging.',
' Buy products that you can reuse. ',
' Maintain, and repair durable products, instead of buying new ones.',			//90
' Check reports for products, that are easily repaired, and have low breakdown rates.  ',
' Reuse items like bags, and containers, when possible. ',
' Use cloth napkins, instead of paper ones. ',
' Use reusable plates, and utensils, instead of disposable ones.',
' Use reusable containers to store food, instead of aluminum foil, and clean wrap.',			//95
' Shop with a canvas bag, instead of using paper, and plastic bags. ',
' Buy rechargeable batteries, for devices used frequently.',
' Reuse packaging cartons, and shipping materials. Old newspapers make great packing material. ',
' Compost your vegetable scraps. ',
' Buy used furniture , there is a surplus of it, and it is much cheaper, than new furniture. ',			//100

]

const data1 = [
'excellent  ',
'brilliant  ',
'great  ',
'nice  ',
'beautiful  ',
'splendid  ',
'perfect  ',
'good  ',
'suitable  ',
'fantastic  ',

  ]
  
const data2 = [
'plan',
'idea',
'thought',
'tip',
'way'
  ]  

//_____________________________________________Random_Item_________________________________________________________________

function getRandomItem(arrayOfItems) {
  // the argument is an array [] of words or phrases
  let i = 0;
  i = Math.floor(Math.random() * arrayOfItems.length);
  return (arrayOfItems[i]);
};

//_____________________________________________   user _________________________________________________________________

function user(handlerInput){
  const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
  
  if(counter==0){
    const sessionAttributes = {};
    
    let itemName = getRandomItem(data0);
    counter=counter+1;
    
    Object.assign(sessionAttributes, {
    question: itemName,
  });
  
    handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
    return handlerInput.responseBuilder
      .speak(itemName+' A simple, and '+getRandomItem(data1)+' '+getRandomItem(data2)+' to help nature.'+'<break time=\"2s\"/> Do you want another idea ?')
      .reprompt('Shall we continue ?')
      .withSimpleCard(itemName)
      .getResponse();
    
  }
  else{
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    let itemName = getRandomItem(data0);
    counter=counter+1;
    sessionAttributes.question = itemName;
    handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
    
    return handlerInput.responseBuilder
      .speak(itemName+' A simple, and '+getRandomItem(data1)+' '+getRandomItem(data2)+' to help nature.'+'<break time=\"2s\"/> Do you want another idea ?')
      .reprompt('Shall we continue ?')
      .withSimpleCard(itemName)
      .getResponse();
    
  }

  
}




//_____________________________________________   start Idea _________________________________________________________________



function startIdea(newIdea, handlerInput) {
  const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
  
  if(newIdea==true){
   
    counter =0 ;
    return handlerInput.responseBuilder
      .speak(requestAttributes.t('WELCOME_MESSAGE')+requestAttributes.t('New_IDEA')+requestAttributes.t('ASK_MESSAGE_START'))
      .reprompt('Shall I start ?')
      .withSimpleCard('Help Nature')
      .getResponse();
    
  }
  else{
     return user(handlerInput);
  }
  
}




const languageString = {
  en: {
    translation: {
      HELP_MESSAGE: 'I will provide you tips, and ideas, on how, you can help nature.  To stop this skill at any time, say, stop ,or cancel, and, ',
      REPEAT_QUESTION_MESSAGE: 'To repeat the last idea, say, repeat. ',
      ASK_MESSAGE_START: ' So, Shall I start? ',
      ASK_CONTINUE: 'So, shall I continue? ',
      STOP_MESSAGE: 'ok , Goodbye ',
      CANCEL_MESSAGE: 'Ok, see you soon. ',
      NO_MESSAGE: 'Ok, we\'ll meet another time. Goodbye! ',
      FACT_UNHANDLED: 'Try saying get an idea',
      HELP_UNHANDLED: 'Say yes to continue, or no to end this. ',
      START_UNHANDLED: 'Try saying get an idea. ',
      WELCOME_MESSAGE: 'Welcome to Help Nature, ',
      New_IDEA: 'I can provide you, tips, and ideas, on how, you can contribute to the environment, by slightly changing, your lifestyle. '

    },
  },
 
  
};

//____________________________________________________ LocalizationInterceptor______________________________________________


const LocalizationInterceptor = {
  process(handlerInput) {
    const localizationClient = i18n.use(sprintf).init({
      lng: handlerInput.requestEnvelope.request.locale,
      overloadTranslationOptionHandler: sprintf.overloadTranslationOptionHandler,
      resources: languageString,
      returnObjects: true
    });

    const attributes = handlerInput.attributesManager.getRequestAttributes();
    attributes.t = function (...args) {
      return localizationClient.t(...args);
    };
  },
};

//____________________________________________________ Launch Intent handler______________________________________________

const LaunchRequest = {
  canHandle(handlerInput) {
    const { request } = handlerInput.requestEnvelope;

    return request.type === 'LaunchRequest'
      || (request.type === 'IntentRequest'
      && request.intent.name === 'AMAZON.StartOverIntent');
  },
  handle(handlerInput) {
    
  return startIdea(true,handlerInput);
  },
};


//____________________________________________________ Launch Intent handler______________________________________________


const HelpIntent = {
  canHandle(handlerInput) {
    const { request } = handlerInput.requestEnvelope;

    return request.type === 'IntentRequest' && request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
    
    return handlerInput.responseBuilder
      .speak(requestAttributes.t('HELP_MESSAGE')+requestAttributes.t('REPEAT_QUESTION_MESSAGE')+requestAttributes.t('ASK_CONTINUE'))
      .reprompt('Shall I start ?')
      .getResponse();

  },
};



//________________________________________________________Unhandled_Intent__________________________________________________


const UnhandledIntent = {
  canHandle() {
    return true;
  },
  handle(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
    if (Object.keys(sessionAttributes).length === 0) {
      const speechOutput = requestAttributes.t('START_UNHANDLED');
      return handlerInput.attributesManager
        .speak(speechOutput)
        .reprompt(speechOutput)
        .getResponse();
    } else if (sessionAttributes.question) {
      const speechOutput = requestAttributes.t('FACT_UNHANDLED');
      return handlerInput.attributesManager
        .speak(speechOutput)
        .reprompt(speechOutput)
        .getResponse();
    }
    const speechOutput = requestAttributes.t('HELP_UNHANDLED');
    return handlerInput.attributesManager.speak(speechOutput).reprompt(speechOutput).getResponse();
  },
};


//________________________________________________Session_ended_Request_________________________________________________

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    console.log("Inside SessionEndedRequestHandler");
    return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${JSON.stringify(handlerInput.requestEnvelope)}`);
    return handlerInput.responseBuilder.getResponse();
  },
};

//________________________________________________Answer Intent_________________________________________________


const AnswerIntent = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && (handlerInput.requestEnvelope.request.intent.name === 'GetTipSpecific'
        || handlerInput.requestEnvelope.request.intent.name === 'GetIdea');
  },
  handle(handlerInput) {
    if (handlerInput.requestEnvelope.request.intent.name === 'GetIdea') {
      
      
      return startIdea(false, handlerInput);
    }
    else{
       return startIdea(false, handlerInput);
    }
    
  },
};

//________________________________________________Repeat Intent_________________________________________________


const RepeatIntent = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.RepeatIntent';
  },
  handle(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
    if(counter==0){
      
      return handlerInput.responseBuilder
      .speak(requestAttributes.t('HELP_MESSAGE')+requestAttributes.t('REPEAT_QUESTION_MESSAGE')+requestAttributes.t('ASK_CONTINUE'))
      .reprompt('Shall I start ?')
      .getResponse();
    
    }
    else{
      return handlerInput.responseBuilder.speak(sessionAttributes.question+'Would you like to know more?')
      .reprompt(sessionAttributes.question+'Would you like to know more?')
      .getResponse();
    }
    
  },
};

//________________________________________________YES Intent_________________________________________________


const YesIntent = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.YesIntent';
  },
  handle(handlerInput) {
    return user(handlerInput);
  },
};


const StopIntent = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent';
  },
  handle(handlerInput) {
    const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
    const speechOutput = requestAttributes.t('STOP_MESSAGE');

    return handlerInput.responseBuilder.speak(speechOutput)
      .reprompt(speechOutput)
      .getResponse();
  },
};

const CancelIntent = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent';
  },
  handle(handlerInput) {
    const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
    const speechOutput = requestAttributes.t('CANCEL_MESSAGE');

    return handlerInput.responseBuilder.speak(speechOutput)
      .getResponse();
  },
};

const NoIntent = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.NoIntent';
  },
  handle(handlerInput) {
    const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
    const speechOutput = requestAttributes.t('NO_MESSAGE');
    return handlerInput.responseBuilder.speak(speechOutput).getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak('Sorry, I can\'t understand the command. Please say again.')
      .reprompt('Sorry, I can\'t understand the command. Please say again.')
      .getResponse();
  },
};

const skillBuilder = Alexa.SkillBuilders.custom();
exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequest,
    HelpIntent,
    AnswerIntent,
    RepeatIntent,
    YesIntent,
    StopIntent,
    CancelIntent,
    NoIntent,
    SessionEndedRequestHandler,
    UnhandledIntent
  )
  .addRequestInterceptors(LocalizationInterceptor)
  .addErrorHandlers(ErrorHandler)
  .lambda();
