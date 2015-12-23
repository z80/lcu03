// **********************************************************************
//
// Copyright (c) 2003-2013 ZeroC, Inc. All rights reserved.
//
// This copy of Ice is licensed to you under the terms described in the
// ICE_LICENSE file included in this distribution.
//
// **********************************************************************
//
// Ice version 3.5.1
//
// <auto-generated>
//
// Generated from file `factory.ice'
//
// Warning: do not edit this file.
//
// </auto-generated>
//

#include <factory.h>
#include <Ice/LocalException.h>
#include <Ice/ObjectFactory.h>
#include <Ice/BasicStream.h>
#include <Ice/Object.h>
#include <IceUtil/Iterator.h>

#ifndef ICE_IGNORE_VERSION
#   if ICE_INT_VERSION / 100 != 305
#       error Ice version mismatch!
#   endif
#   if ICE_INT_VERSION % 100 > 50
#       error Beta header file detected
#   endif
#   if ICE_INT_VERSION % 100 < 1
#       error Ice patch level mismatch!
#   endif
#endif

namespace
{

const ::std::string __Factory__DeviceAbs__status_name = "status";

const ::std::string __Factory__DeviceAbs__release_name = "release";

const ::std::string __Factory__DeviceFactory__interfaces_name = "interfaces";

const ::std::string __Factory__DeviceFactory__query_name = "query";

}
::IceProxy::Ice::Object* ::IceProxy::Factory::upCast(::IceProxy::Factory::DeviceAbs* p) { return p; }

void
::IceProxy::Factory::__read(::IceInternal::BasicStream* __is, ::IceInternal::ProxyHandle< ::IceProxy::Factory::DeviceAbs>& v)
{
    ::Ice::ObjectPrx proxy;
    __is->read(proxy);
    if(!proxy)
    {
        v = 0;
    }
    else
    {
        v = new ::IceProxy::Factory::DeviceAbs;
        v->__copyFrom(proxy);
    }
}

::std::string
IceProxy::Factory::DeviceAbs::status(const ::Ice::Context* __ctx)
{
    ::IceInternal::InvocationObserver __observer(this, __Factory__DeviceAbs__status_name, __ctx);
    int __cnt = 0;
    while(true)
    {
        ::IceInternal::Handle< ::IceDelegate::Ice::Object> __delBase;
        try
        {
            __checkTwowayOnly(__Factory__DeviceAbs__status_name);
            __delBase = __getDelegate(false);
            ::IceDelegate::Factory::DeviceAbs* __del = dynamic_cast< ::IceDelegate::Factory::DeviceAbs*>(__delBase.get());
            return __del->status(__ctx, __observer);
        }
        catch(const ::IceInternal::LocalExceptionWrapper& __ex)
        {
            __handleExceptionWrapper(__delBase, __ex, __observer);
        }
        catch(const ::Ice::LocalException& __ex)
        {
            __handleException(__delBase, __ex, true, __cnt, __observer);
        }
    }
}

::Ice::AsyncResultPtr
IceProxy::Factory::DeviceAbs::begin_status(const ::Ice::Context* __ctx, const ::IceInternal::CallbackBasePtr& __del, const ::Ice::LocalObjectPtr& __cookie)
{
    __checkAsyncTwowayOnly(__Factory__DeviceAbs__status_name);
    ::IceInternal::OutgoingAsyncPtr __result = new ::IceInternal::OutgoingAsync(this, __Factory__DeviceAbs__status_name, __del, __cookie);
    try
    {
        __result->__prepare(__Factory__DeviceAbs__status_name, ::Ice::Normal, __ctx);
        __result->__writeEmptyParams();
        __result->__send(true);
    }
    catch(const ::Ice::LocalException& __ex)
    {
        __result->__exceptionAsync(__ex);
    }
    return __result;
}

::std::string
IceProxy::Factory::DeviceAbs::end_status(const ::Ice::AsyncResultPtr& __result)
{
    ::Ice::AsyncResult::__check(__result, this, __Factory__DeviceAbs__status_name);
    ::std::string __ret;
    bool __ok = __result->__wait();
    try
    {
        if(!__ok)
        {
            try
            {
                __result->__throwUserException();
            }
            catch(const ::Ice::UserException& __ex)
            {
                throw ::Ice::UnknownUserException(__FILE__, __LINE__, __ex.ice_name());
            }
        }
        ::IceInternal::BasicStream* __is = __result->__startReadParams();
        __is->read(__ret);
        __result->__endReadParams();
        return __ret;
    }
    catch(const ::Ice::LocalException& ex)
    {
        __result->__getObserver().failed(ex.ice_name());
        throw;
    }
}

void
IceProxy::Factory::DeviceAbs::release(const ::Ice::Context* __ctx)
{
    ::IceInternal::InvocationObserver __observer(this, __Factory__DeviceAbs__release_name, __ctx);
    int __cnt = 0;
    while(true)
    {
        ::IceInternal::Handle< ::IceDelegate::Ice::Object> __delBase;
        try
        {
            __delBase = __getDelegate(false);
            ::IceDelegate::Factory::DeviceAbs* __del = dynamic_cast< ::IceDelegate::Factory::DeviceAbs*>(__delBase.get());
            __del->release(__ctx, __observer);
            return;
        }
        catch(const ::IceInternal::LocalExceptionWrapper& __ex)
        {
            __handleExceptionWrapper(__delBase, __ex, __observer);
        }
        catch(const ::Ice::LocalException& __ex)
        {
            __handleException(__delBase, __ex, true, __cnt, __observer);
        }
    }
}

::Ice::AsyncResultPtr
IceProxy::Factory::DeviceAbs::begin_release(const ::Ice::Context* __ctx, const ::IceInternal::CallbackBasePtr& __del, const ::Ice::LocalObjectPtr& __cookie)
{
    ::IceInternal::OutgoingAsyncPtr __result = new ::IceInternal::OutgoingAsync(this, __Factory__DeviceAbs__release_name, __del, __cookie);
    try
    {
        __result->__prepare(__Factory__DeviceAbs__release_name, ::Ice::Normal, __ctx);
        __result->__writeEmptyParams();
        __result->__send(true);
    }
    catch(const ::Ice::LocalException& __ex)
    {
        __result->__exceptionAsync(__ex);
    }
    return __result;
}

void
IceProxy::Factory::DeviceAbs::end_release(const ::Ice::AsyncResultPtr& __result)
{
    __end(__result, __Factory__DeviceAbs__release_name);
}

const ::std::string&
IceProxy::Factory::DeviceAbs::ice_staticId()
{
    return ::Factory::DeviceAbs::ice_staticId();
}

::IceInternal::Handle< ::IceDelegateM::Ice::Object>
IceProxy::Factory::DeviceAbs::__createDelegateM()
{
    return ::IceInternal::Handle< ::IceDelegateM::Ice::Object>(new ::IceDelegateM::Factory::DeviceAbs);
}

::IceInternal::Handle< ::IceDelegateD::Ice::Object>
IceProxy::Factory::DeviceAbs::__createDelegateD()
{
    return ::IceInternal::Handle< ::IceDelegateD::Ice::Object>(new ::IceDelegateD::Factory::DeviceAbs);
}

::IceProxy::Ice::Object*
IceProxy::Factory::DeviceAbs::__newInstance() const
{
    return new DeviceAbs;
}
::IceProxy::Ice::Object* ::IceProxy::Factory::upCast(::IceProxy::Factory::DeviceFactory* p) { return p; }

void
::IceProxy::Factory::__read(::IceInternal::BasicStream* __is, ::IceInternal::ProxyHandle< ::IceProxy::Factory::DeviceFactory>& v)
{
    ::Ice::ObjectPrx proxy;
    __is->read(proxy);
    if(!proxy)
    {
        v = 0;
    }
    else
    {
        v = new ::IceProxy::Factory::DeviceFactory;
        v->__copyFrom(proxy);
    }
}

::Factory::TStringArray
IceProxy::Factory::DeviceFactory::interfaces(const ::Ice::Context* __ctx)
{
    ::IceInternal::InvocationObserver __observer(this, __Factory__DeviceFactory__interfaces_name, __ctx);
    int __cnt = 0;
    while(true)
    {
        ::IceInternal::Handle< ::IceDelegate::Ice::Object> __delBase;
        try
        {
            __checkTwowayOnly(__Factory__DeviceFactory__interfaces_name);
            __delBase = __getDelegate(false);
            ::IceDelegate::Factory::DeviceFactory* __del = dynamic_cast< ::IceDelegate::Factory::DeviceFactory*>(__delBase.get());
            return __del->interfaces(__ctx, __observer);
        }
        catch(const ::IceInternal::LocalExceptionWrapper& __ex)
        {
            __handleExceptionWrapperRelaxed(__delBase, __ex, true, __cnt, __observer);
        }
        catch(const ::Ice::LocalException& __ex)
        {
            __handleException(__delBase, __ex, true, __cnt, __observer);
        }
    }
}

::Ice::AsyncResultPtr
IceProxy::Factory::DeviceFactory::begin_interfaces(const ::Ice::Context* __ctx, const ::IceInternal::CallbackBasePtr& __del, const ::Ice::LocalObjectPtr& __cookie)
{
    __checkAsyncTwowayOnly(__Factory__DeviceFactory__interfaces_name);
    ::IceInternal::OutgoingAsyncPtr __result = new ::IceInternal::OutgoingAsync(this, __Factory__DeviceFactory__interfaces_name, __del, __cookie);
    try
    {
        __result->__prepare(__Factory__DeviceFactory__interfaces_name, ::Ice::Idempotent, __ctx);
        __result->__writeEmptyParams();
        __result->__send(true);
    }
    catch(const ::Ice::LocalException& __ex)
    {
        __result->__exceptionAsync(__ex);
    }
    return __result;
}

::Factory::TStringArray
IceProxy::Factory::DeviceFactory::end_interfaces(const ::Ice::AsyncResultPtr& __result)
{
    ::Ice::AsyncResult::__check(__result, this, __Factory__DeviceFactory__interfaces_name);
    ::Factory::TStringArray __ret;
    bool __ok = __result->__wait();
    try
    {
        if(!__ok)
        {
            try
            {
                __result->__throwUserException();
            }
            catch(const ::Ice::UserException& __ex)
            {
                throw ::Ice::UnknownUserException(__FILE__, __LINE__, __ex.ice_name());
            }
        }
        ::IceInternal::BasicStream* __is = __result->__startReadParams();
        __is->read(__ret);
        __result->__endReadParams();
        return __ret;
    }
    catch(const ::Ice::LocalException& ex)
    {
        __result->__getObserver().failed(ex.ice_name());
        throw;
    }
}

::Factory::DeviceAbsPrx
IceProxy::Factory::DeviceFactory::query(const ::std::string& interfaceName, const ::Ice::Context* __ctx)
{
    ::IceInternal::InvocationObserver __observer(this, __Factory__DeviceFactory__query_name, __ctx);
    int __cnt = 0;
    while(true)
    {
        ::IceInternal::Handle< ::IceDelegate::Ice::Object> __delBase;
        try
        {
            __checkTwowayOnly(__Factory__DeviceFactory__query_name);
            __delBase = __getDelegate(false);
            ::IceDelegate::Factory::DeviceFactory* __del = dynamic_cast< ::IceDelegate::Factory::DeviceFactory*>(__delBase.get());
            return __del->query(interfaceName, __ctx, __observer);
        }
        catch(const ::IceInternal::LocalExceptionWrapper& __ex)
        {
            __handleExceptionWrapper(__delBase, __ex, __observer);
        }
        catch(const ::Ice::LocalException& __ex)
        {
            __handleException(__delBase, __ex, true, __cnt, __observer);
        }
    }
}

::Ice::AsyncResultPtr
IceProxy::Factory::DeviceFactory::begin_query(const ::std::string& interfaceName, const ::Ice::Context* __ctx, const ::IceInternal::CallbackBasePtr& __del, const ::Ice::LocalObjectPtr& __cookie)
{
    __checkAsyncTwowayOnly(__Factory__DeviceFactory__query_name);
    ::IceInternal::OutgoingAsyncPtr __result = new ::IceInternal::OutgoingAsync(this, __Factory__DeviceFactory__query_name, __del, __cookie);
    try
    {
        __result->__prepare(__Factory__DeviceFactory__query_name, ::Ice::Normal, __ctx);
        ::IceInternal::BasicStream* __os = __result->__startWriteParams(::Ice::DefaultFormat);
        __os->write(interfaceName);
        __result->__endWriteParams();
        __result->__send(true);
    }
    catch(const ::Ice::LocalException& __ex)
    {
        __result->__exceptionAsync(__ex);
    }
    return __result;
}

::Factory::DeviceAbsPrx
IceProxy::Factory::DeviceFactory::end_query(const ::Ice::AsyncResultPtr& __result)
{
    ::Ice::AsyncResult::__check(__result, this, __Factory__DeviceFactory__query_name);
    ::Factory::DeviceAbsPrx __ret;
    bool __ok = __result->__wait();
    try
    {
        if(!__ok)
        {
            try
            {
                __result->__throwUserException();
            }
            catch(const ::Ice::UserException& __ex)
            {
                throw ::Ice::UnknownUserException(__FILE__, __LINE__, __ex.ice_name());
            }
        }
        ::IceInternal::BasicStream* __is = __result->__startReadParams();
        __is->read(__ret);
        __result->__endReadParams();
        return __ret;
    }
    catch(const ::Ice::LocalException& ex)
    {
        __result->__getObserver().failed(ex.ice_name());
        throw;
    }
}

const ::std::string&
IceProxy::Factory::DeviceFactory::ice_staticId()
{
    return ::Factory::DeviceFactory::ice_staticId();
}

::IceInternal::Handle< ::IceDelegateM::Ice::Object>
IceProxy::Factory::DeviceFactory::__createDelegateM()
{
    return ::IceInternal::Handle< ::IceDelegateM::Ice::Object>(new ::IceDelegateM::Factory::DeviceFactory);
}

::IceInternal::Handle< ::IceDelegateD::Ice::Object>
IceProxy::Factory::DeviceFactory::__createDelegateD()
{
    return ::IceInternal::Handle< ::IceDelegateD::Ice::Object>(new ::IceDelegateD::Factory::DeviceFactory);
}

::IceProxy::Ice::Object*
IceProxy::Factory::DeviceFactory::__newInstance() const
{
    return new DeviceFactory;
}

::std::string
IceDelegateM::Factory::DeviceAbs::status(const ::Ice::Context* __context, ::IceInternal::InvocationObserver& __observer)
{
    ::IceInternal::Outgoing __og(__handler.get(), __Factory__DeviceAbs__status_name, ::Ice::Normal, __context, __observer);
    __og.writeEmptyParams();
    bool __ok = __og.invoke();
    ::std::string __ret;
    try
    {
        if(!__ok)
        {
            try
            {
                __og.throwUserException();
            }
            catch(const ::Ice::UserException& __ex)
            {
                ::Ice::UnknownUserException __uue(__FILE__, __LINE__, __ex.ice_name());
                throw __uue;
            }
        }
        ::IceInternal::BasicStream* __is = __og.startReadParams();
        __is->read(__ret);
        __og.endReadParams();
        return __ret;
    }
    catch(const ::Ice::LocalException& __ex)
    {
        throw ::IceInternal::LocalExceptionWrapper(__ex, false);
    }
}

void
IceDelegateM::Factory::DeviceAbs::release(const ::Ice::Context* __context, ::IceInternal::InvocationObserver& __observer)
{
    ::IceInternal::Outgoing __og(__handler.get(), __Factory__DeviceAbs__release_name, ::Ice::Normal, __context, __observer);
    __og.writeEmptyParams();
    bool __ok = __og.invoke();
    if(__og.hasResponse())
    {
        try
        {
            if(!__ok)
            {
                try
                {
                    __og.throwUserException();
                }
                catch(const ::Ice::UserException& __ex)
                {
                    ::Ice::UnknownUserException __uue(__FILE__, __LINE__, __ex.ice_name());
                    throw __uue;
                }
            }
            __og.readEmptyParams();
        }
        catch(const ::Ice::LocalException& __ex)
        {
            throw ::IceInternal::LocalExceptionWrapper(__ex, false);
        }
    }
}

::Factory::TStringArray
IceDelegateM::Factory::DeviceFactory::interfaces(const ::Ice::Context* __context, ::IceInternal::InvocationObserver& __observer)
{
    ::IceInternal::Outgoing __og(__handler.get(), __Factory__DeviceFactory__interfaces_name, ::Ice::Idempotent, __context, __observer);
    __og.writeEmptyParams();
    bool __ok = __og.invoke();
    ::Factory::TStringArray __ret;
    try
    {
        if(!__ok)
        {
            try
            {
                __og.throwUserException();
            }
            catch(const ::Ice::UserException& __ex)
            {
                ::Ice::UnknownUserException __uue(__FILE__, __LINE__, __ex.ice_name());
                throw __uue;
            }
        }
        ::IceInternal::BasicStream* __is = __og.startReadParams();
        __is->read(__ret);
        __og.endReadParams();
        return __ret;
    }
    catch(const ::Ice::LocalException& __ex)
    {
        throw ::IceInternal::LocalExceptionWrapper(__ex, false);
    }
}

::Factory::DeviceAbsPrx
IceDelegateM::Factory::DeviceFactory::query(const ::std::string& interfaceName, const ::Ice::Context* __context, ::IceInternal::InvocationObserver& __observer)
{
    ::IceInternal::Outgoing __og(__handler.get(), __Factory__DeviceFactory__query_name, ::Ice::Normal, __context, __observer);
    try
    {
        ::IceInternal::BasicStream* __os = __og.startWriteParams(::Ice::DefaultFormat);
        __os->write(interfaceName);
        __og.endWriteParams();
    }
    catch(const ::Ice::LocalException& __ex)
    {
        __og.abort(__ex);
    }
    bool __ok = __og.invoke();
    ::Factory::DeviceAbsPrx __ret;
    try
    {
        if(!__ok)
        {
            try
            {
                __og.throwUserException();
            }
            catch(const ::Ice::UserException& __ex)
            {
                ::Ice::UnknownUserException __uue(__FILE__, __LINE__, __ex.ice_name());
                throw __uue;
            }
        }
        ::IceInternal::BasicStream* __is = __og.startReadParams();
        __is->read(__ret);
        __og.endReadParams();
        return __ret;
    }
    catch(const ::Ice::LocalException& __ex)
    {
        throw ::IceInternal::LocalExceptionWrapper(__ex, false);
    }
}

::std::string
IceDelegateD::Factory::DeviceAbs::status(const ::Ice::Context* __context, ::IceInternal::InvocationObserver&)
{
    class _DirectI : public ::IceInternal::Direct
    {
    public:

        _DirectI(::std::string& __result, const ::Ice::Current& __current) : 
            ::IceInternal::Direct(__current),
            _result(__result)
        {
        }
        
        virtual ::Ice::DispatchStatus
        run(::Ice::Object* object)
        {
            ::Factory::DeviceAbs* servant = dynamic_cast< ::Factory::DeviceAbs*>(object);
            if(!servant)
            {
                throw ::Ice::OperationNotExistException(__FILE__, __LINE__, _current.id, _current.facet, _current.operation);
            }
            _result = servant->status(_current);
            return ::Ice::DispatchOK;
        }
        
    private:
        
        ::std::string& _result;
    };
    
    ::Ice::Current __current;
    __initCurrent(__current, __Factory__DeviceAbs__status_name, ::Ice::Normal, __context);
    ::std::string __result;
    try
    {
        _DirectI __direct(__result, __current);
        try
        {
            __direct.getServant()->__collocDispatch(__direct);
        }
        catch(...)
        {
            __direct.destroy();
            throw;
        }
        __direct.destroy();
    }
    catch(const ::Ice::SystemException&)
    {
        throw;
    }
    catch(const ::IceInternal::LocalExceptionWrapper&)
    {
        throw;
    }
    catch(const ::std::exception& __ex)
    {
        ::IceInternal::LocalExceptionWrapper::throwWrapper(__ex);
    }
    catch(...)
    {
        throw ::IceInternal::LocalExceptionWrapper(::Ice::UnknownException(__FILE__, __LINE__, "unknown c++ exception"), false);
    }
    return __result;
}

void
IceDelegateD::Factory::DeviceAbs::release(const ::Ice::Context* __context, ::IceInternal::InvocationObserver&)
{
    class _DirectI : public ::IceInternal::Direct
    {
    public:

        _DirectI(const ::Ice::Current& __current) : 
            ::IceInternal::Direct(__current)
        {
        }
        
        virtual ::Ice::DispatchStatus
        run(::Ice::Object* object)
        {
            ::Factory::DeviceAbs* servant = dynamic_cast< ::Factory::DeviceAbs*>(object);
            if(!servant)
            {
                throw ::Ice::OperationNotExistException(__FILE__, __LINE__, _current.id, _current.facet, _current.operation);
            }
            servant->release(_current);
            return ::Ice::DispatchOK;
        }
        
    private:
        
    };
    
    ::Ice::Current __current;
    __initCurrent(__current, __Factory__DeviceAbs__release_name, ::Ice::Normal, __context);
    try
    {
        _DirectI __direct(__current);
        try
        {
            __direct.getServant()->__collocDispatch(__direct);
        }
        catch(...)
        {
            __direct.destroy();
            throw;
        }
        __direct.destroy();
    }
    catch(const ::Ice::SystemException&)
    {
        throw;
    }
    catch(const ::IceInternal::LocalExceptionWrapper&)
    {
        throw;
    }
    catch(const ::std::exception& __ex)
    {
        ::IceInternal::LocalExceptionWrapper::throwWrapper(__ex);
    }
    catch(...)
    {
        throw ::IceInternal::LocalExceptionWrapper(::Ice::UnknownException(__FILE__, __LINE__, "unknown c++ exception"), false);
    }
}

::Factory::TStringArray
IceDelegateD::Factory::DeviceFactory::interfaces(const ::Ice::Context* __context, ::IceInternal::InvocationObserver&)
{
    class _DirectI : public ::IceInternal::Direct
    {
    public:

        _DirectI(::Factory::TStringArray& __result, const ::Ice::Current& __current) : 
            ::IceInternal::Direct(__current),
            _result(__result)
        {
        }
        
        virtual ::Ice::DispatchStatus
        run(::Ice::Object* object)
        {
            ::Factory::DeviceFactory* servant = dynamic_cast< ::Factory::DeviceFactory*>(object);
            if(!servant)
            {
                throw ::Ice::OperationNotExistException(__FILE__, __LINE__, _current.id, _current.facet, _current.operation);
            }
            _result = servant->interfaces(_current);
            return ::Ice::DispatchOK;
        }
        
    private:
        
        ::Factory::TStringArray& _result;
    };
    
    ::Ice::Current __current;
    __initCurrent(__current, __Factory__DeviceFactory__interfaces_name, ::Ice::Idempotent, __context);
    ::Factory::TStringArray __result;
    try
    {
        _DirectI __direct(__result, __current);
        try
        {
            __direct.getServant()->__collocDispatch(__direct);
        }
        catch(...)
        {
            __direct.destroy();
            throw;
        }
        __direct.destroy();
    }
    catch(const ::Ice::SystemException&)
    {
        throw;
    }
    catch(const ::IceInternal::LocalExceptionWrapper&)
    {
        throw;
    }
    catch(const ::std::exception& __ex)
    {
        ::IceInternal::LocalExceptionWrapper::throwWrapper(__ex);
    }
    catch(...)
    {
        throw ::IceInternal::LocalExceptionWrapper(::Ice::UnknownException(__FILE__, __LINE__, "unknown c++ exception"), false);
    }
    return __result;
}

::Factory::DeviceAbsPrx
IceDelegateD::Factory::DeviceFactory::query(const ::std::string& interfaceName, const ::Ice::Context* __context, ::IceInternal::InvocationObserver&)
{
    class _DirectI : public ::IceInternal::Direct
    {
    public:

        _DirectI(::Factory::DeviceAbsPrx& __result, const ::std::string& __p_interfaceName, const ::Ice::Current& __current) : 
            ::IceInternal::Direct(__current),
            _result(__result),
            _m_interfaceName(__p_interfaceName)
        {
        }
        
        virtual ::Ice::DispatchStatus
        run(::Ice::Object* object)
        {
            ::Factory::DeviceFactory* servant = dynamic_cast< ::Factory::DeviceFactory*>(object);
            if(!servant)
            {
                throw ::Ice::OperationNotExistException(__FILE__, __LINE__, _current.id, _current.facet, _current.operation);
            }
            _result = servant->query(_m_interfaceName, _current);
            return ::Ice::DispatchOK;
        }
        
    private:
        
        ::Factory::DeviceAbsPrx& _result;
        const ::std::string& _m_interfaceName;
    };
    
    ::Ice::Current __current;
    __initCurrent(__current, __Factory__DeviceFactory__query_name, ::Ice::Normal, __context);
    ::Factory::DeviceAbsPrx __result;
    try
    {
        _DirectI __direct(__result, interfaceName, __current);
        try
        {
            __direct.getServant()->__collocDispatch(__direct);
        }
        catch(...)
        {
            __direct.destroy();
            throw;
        }
        __direct.destroy();
    }
    catch(const ::Ice::SystemException&)
    {
        throw;
    }
    catch(const ::IceInternal::LocalExceptionWrapper&)
    {
        throw;
    }
    catch(const ::std::exception& __ex)
    {
        ::IceInternal::LocalExceptionWrapper::throwWrapper(__ex);
    }
    catch(...)
    {
        throw ::IceInternal::LocalExceptionWrapper(::Ice::UnknownException(__FILE__, __LINE__, "unknown c++ exception"), false);
    }
    return __result;
}

::Ice::Object* Factory::upCast(::Factory::DeviceAbs* p) { return p; }

namespace
{
const ::std::string __Factory__DeviceAbs_ids[2] =
{
    "::Factory::DeviceAbs",
    "::Ice::Object"
};

}

bool
Factory::DeviceAbs::ice_isA(const ::std::string& _s, const ::Ice::Current&) const
{
    return ::std::binary_search(__Factory__DeviceAbs_ids, __Factory__DeviceAbs_ids + 2, _s);
}

::std::vector< ::std::string>
Factory::DeviceAbs::ice_ids(const ::Ice::Current&) const
{
    return ::std::vector< ::std::string>(&__Factory__DeviceAbs_ids[0], &__Factory__DeviceAbs_ids[2]);
}

const ::std::string&
Factory::DeviceAbs::ice_id(const ::Ice::Current&) const
{
    return __Factory__DeviceAbs_ids[0];
}

const ::std::string&
Factory::DeviceAbs::ice_staticId()
{
    return __Factory__DeviceAbs_ids[0];
}

::Ice::DispatchStatus
Factory::DeviceAbs::___status(::IceInternal::Incoming& __inS, const ::Ice::Current& __current)
{
    __checkMode(::Ice::Normal, __current.mode);
    __inS.readEmptyParams();
    ::std::string __ret = status(__current);
    ::IceInternal::BasicStream* __os = __inS.__startWriteParams(::Ice::DefaultFormat);
    __os->write(__ret);
    __inS.__endWriteParams(true);
    return ::Ice::DispatchOK;
}

::Ice::DispatchStatus
Factory::DeviceAbs::___release(::IceInternal::Incoming& __inS, const ::Ice::Current& __current)
{
    __checkMode(::Ice::Normal, __current.mode);
    __inS.readEmptyParams();
    release(__current);
    __inS.__writeEmptyParams();
    return ::Ice::DispatchOK;
}

namespace
{
const ::std::string __Factory__DeviceAbs_all[] =
{
    "ice_id",
    "ice_ids",
    "ice_isA",
    "ice_ping",
    "release",
    "status"
};

}

::Ice::DispatchStatus
Factory::DeviceAbs::__dispatch(::IceInternal::Incoming& in, const ::Ice::Current& current)
{
    ::std::pair< const ::std::string*, const ::std::string*> r = ::std::equal_range(__Factory__DeviceAbs_all, __Factory__DeviceAbs_all + 6, current.operation);
    if(r.first == r.second)
    {
        throw ::Ice::OperationNotExistException(__FILE__, __LINE__, current.id, current.facet, current.operation);
    }

    switch(r.first - __Factory__DeviceAbs_all)
    {
        case 0:
        {
            return ___ice_id(in, current);
        }
        case 1:
        {
            return ___ice_ids(in, current);
        }
        case 2:
        {
            return ___ice_isA(in, current);
        }
        case 3:
        {
            return ___ice_ping(in, current);
        }
        case 4:
        {
            return ___release(in, current);
        }
        case 5:
        {
            return ___status(in, current);
        }
    }

    assert(false);
    throw ::Ice::OperationNotExistException(__FILE__, __LINE__, current.id, current.facet, current.operation);
}

void
Factory::DeviceAbs::__writeImpl(::IceInternal::BasicStream* __os) const
{
    __os->startWriteSlice(ice_staticId(), -1, true);
    __os->endWriteSlice();
}

void
Factory::DeviceAbs::__readImpl(::IceInternal::BasicStream* __is)
{
    __is->startReadSlice();
    __is->endReadSlice();
}

void 
Factory::__patch(DeviceAbsPtr& handle, const ::Ice::ObjectPtr& v)
{
    handle = ::Factory::DeviceAbsPtr::dynamicCast(v);
    if(v && !handle)
    {
        IceInternal::Ex::throwUOE(::Factory::DeviceAbs::ice_staticId(), v);
    }
}

::Ice::Object* Factory::upCast(::Factory::DeviceFactory* p) { return p; }

namespace
{
const ::std::string __Factory__DeviceFactory_ids[2] =
{
    "::Factory::DeviceFactory",
    "::Ice::Object"
};

}

bool
Factory::DeviceFactory::ice_isA(const ::std::string& _s, const ::Ice::Current&) const
{
    return ::std::binary_search(__Factory__DeviceFactory_ids, __Factory__DeviceFactory_ids + 2, _s);
}

::std::vector< ::std::string>
Factory::DeviceFactory::ice_ids(const ::Ice::Current&) const
{
    return ::std::vector< ::std::string>(&__Factory__DeviceFactory_ids[0], &__Factory__DeviceFactory_ids[2]);
}

const ::std::string&
Factory::DeviceFactory::ice_id(const ::Ice::Current&) const
{
    return __Factory__DeviceFactory_ids[0];
}

const ::std::string&
Factory::DeviceFactory::ice_staticId()
{
    return __Factory__DeviceFactory_ids[0];
}

::Ice::DispatchStatus
Factory::DeviceFactory::___interfaces(::IceInternal::Incoming& __inS, const ::Ice::Current& __current)
{
    __checkMode(::Ice::Idempotent, __current.mode);
    __inS.readEmptyParams();
    ::Factory::TStringArray __ret = interfaces(__current);
    ::IceInternal::BasicStream* __os = __inS.__startWriteParams(::Ice::DefaultFormat);
    __os->write(__ret);
    __inS.__endWriteParams(true);
    return ::Ice::DispatchOK;
}

::Ice::DispatchStatus
Factory::DeviceFactory::___query(::IceInternal::Incoming& __inS, const ::Ice::Current& __current)
{
    __checkMode(::Ice::Normal, __current.mode);
    ::IceInternal::BasicStream* __is = __inS.startReadParams();
    ::std::string interfaceName;
    __is->read(interfaceName);
    __inS.endReadParams();
    ::Factory::DeviceAbsPrx __ret = query(interfaceName, __current);
    ::IceInternal::BasicStream* __os = __inS.__startWriteParams(::Ice::DefaultFormat);
    __os->write(__ret);
    __inS.__endWriteParams(true);
    return ::Ice::DispatchOK;
}

namespace
{
const ::std::string __Factory__DeviceFactory_all[] =
{
    "ice_id",
    "ice_ids",
    "ice_isA",
    "ice_ping",
    "interfaces",
    "query"
};

}

::Ice::DispatchStatus
Factory::DeviceFactory::__dispatch(::IceInternal::Incoming& in, const ::Ice::Current& current)
{
    ::std::pair< const ::std::string*, const ::std::string*> r = ::std::equal_range(__Factory__DeviceFactory_all, __Factory__DeviceFactory_all + 6, current.operation);
    if(r.first == r.second)
    {
        throw ::Ice::OperationNotExistException(__FILE__, __LINE__, current.id, current.facet, current.operation);
    }

    switch(r.first - __Factory__DeviceFactory_all)
    {
        case 0:
        {
            return ___ice_id(in, current);
        }
        case 1:
        {
            return ___ice_ids(in, current);
        }
        case 2:
        {
            return ___ice_isA(in, current);
        }
        case 3:
        {
            return ___ice_ping(in, current);
        }
        case 4:
        {
            return ___interfaces(in, current);
        }
        case 5:
        {
            return ___query(in, current);
        }
    }

    assert(false);
    throw ::Ice::OperationNotExistException(__FILE__, __LINE__, current.id, current.facet, current.operation);
}

void
Factory::DeviceFactory::__writeImpl(::IceInternal::BasicStream* __os) const
{
    __os->startWriteSlice(ice_staticId(), -1, true);
    __os->endWriteSlice();
}

void
Factory::DeviceFactory::__readImpl(::IceInternal::BasicStream* __is)
{
    __is->startReadSlice();
    __is->endReadSlice();
}

void 
Factory::__patch(DeviceFactoryPtr& handle, const ::Ice::ObjectPtr& v)
{
    handle = ::Factory::DeviceFactoryPtr::dynamicCast(v);
    if(v && !handle)
    {
        IceInternal::Ex::throwUOE(::Factory::DeviceFactory::ice_staticId(), v);
    }
}
