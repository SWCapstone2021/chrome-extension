test('message sending check', () => {
    const listenerSpy = jest.fn()
    const sendResponseSpy = jest.fn()

    chrome.runtime.onMessage.addListener(listenerSpy)

    expect(listenerSpy).not.toBeCalled()
    expect(chrome.runtime.onMessage.hasListeners()).toBe(true)

    chrome.runtime.onMessage.callListeners(
        { greeting: 'hello' }, // message
        {}, // MessageSender object
        sendResponseSpy, // SendResponse function
    )

    expect(listenerSpy).toBeCalledWith(
        { greeting: 'hello' },
        {},
        sendResponseSpy,
    )
    expect(sendResponseSpy).not.toBeCalled()
})

test('message with callback test', () => {
    const message = { greeting: 'hello?' }
    const response = { greeting: 'here I am' }
    const callbackSpy = jest.fn()

    chrome.runtime.sendMessage.mockImplementation(
        (message, callback) => {
            callback(response)
        },
    )

    chrome.runtime.sendMessage(message, callbackSpy)

    expect(chrome.runtime.sendMessage).toBeCalledWith(
        message,
        callbackSpy,
    )
    expect(callbackSpy).toBeCalledWith(response)
})